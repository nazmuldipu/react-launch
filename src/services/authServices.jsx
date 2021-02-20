import http from "./httpService";
import {
  getCookie,
  setCookie,
  getAllCookie,
  removeCookie,
} from "./cookieService";

const apiEndpoint =
  "/oauth/token?grant_type=password&client_id=ship_client&client_secret=ship_secret&";

export async function login(username, password) {
  const url = apiEndpoint + `username=${username}&password=${password}`;
  const { data } = await http.post(url);
  saveToken(data);
}

export function getCurrentUser() {
  const user = getCookie("user");
  return user;
}

export function isAuthenticated() {
  const access_token = getCookie("access_token");
  return !!access_token;
}

export function logout() {
  console.log("logout module");
  const allCookies = getAllCookie();
  console.log("allCookies", allCookies);
  Object.keys(allCookies).map((m) => {
    removeCookie(m);
  });
  window.location = "/";
}
function saveToken(data) {
  const user = {
    id: data.id,
    name: data.name,
    phone: data.phone,
    username: data.username,
    canReserve: data.canReserve,
    canCancelReservation: data.canCancelReservation,
    canCancelBooking: data.canCancelBooking,
  };

  const authority = data.authorities.map((au) => au.authority);
  var expires = new Date();
  expires.setSeconds(expires.getSeconds() + data.expires_in);

  setCookie("access_token", data.access_token, { expires });
  setCookie("refresh_token", data.refresh_token);
  setCookie("user", user);
  setCookie("authority", authority);
}

export default {
  login,
  getCurrentUser,
  isAuthenticated,
  logout,
};

//https://shipapi.hotelswave.com/oauth/token?
//grant_type=password&client_id=ship_client&client_secret=ship_secret&
//username=01912239643&password=shipHotelswave
