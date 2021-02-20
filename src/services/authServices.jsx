import {
  getAllCookie,
  getCookie,
  removeCookie,
  setCookie,
} from "./cookieService";
import http from "./httpService";

const apiEndpoint =
  "/oauth/token?grant_type=password&client_id=ship_client&client_secret=ship_secret&";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER_KEY = "user";
const AUTHORITY_KEY = "authority";

export async function login(username, password) {
  const url = apiEndpoint + `username=${username}&password=${password}`;
  const { data } = await http.post(url);
  saveToken(data);
}

export function logout() {
  const allCookies = getAllCookie();
  Object.keys(allCookies).map((m) => {
    removeCookie(m);
  });
  window.location = "/";
}

export function getCurrentUser() {
  const user = getCookie(USER_KEY);
  return user;
}

export function hasAuthority(roles) {
  const userRoles = getCookie(AUTHORITY_KEY);
  for (let ro of roles) {
    for (let ur of userRoles) {
      if (ur === ro) {
        return true;
      }
    }
  }
  return false;
}

export function isAuthenticated() {
  const access_token = getCookie(ACCESS_TOKEN_KEY);
  return !!access_token;
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

  setCookie(ACCESS_TOKEN_KEY, data.access_token, { expires });
  setCookie(REFRESH_TOKEN_KEY, data.refresh_token);
  setCookie(USER_KEY, user);
  setCookie(AUTHORITY_KEY, authority);
}

export default {
  getCurrentUser,
  hasAuthority,
  isAuthenticated,
  login,
  logout,
};

//https://shipapi.hotelswave.com/oauth/token?
//grant_type=password&client_id=ship_client&client_secret=ship_secret&
//username=01912239643&password=shipHotelswave
