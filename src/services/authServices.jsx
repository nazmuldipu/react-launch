import {
  getAllCookie,
  getCookie,
  removeCookie,
  setCookie,
} from "./cookieService";
import http from "./httpService";

const apiEndpoint =
  "/oauth/token?grant_type=password&client_id=ship_client&client_secret=ship_secret&";

const ACCESS_TOKEN_BY_REFRESH_TOKEN_URL =
  "/oauth/token?grant_type=refresh_token&client_id=ship_client&client_secret=ship_secret&";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const USER_KEY = "user";
const AUTHORITY_KEY = "authority";

export async function login(username, password) {
  const url = apiEndpoint + `username=${username}&password=${password}`;
  const { data } = await http.post(url);
  saveToken(data);
}

const obtainAccessToken = async (refresh_token) => {
  const url =
    ACCESS_TOKEN_BY_REFRESH_TOKEN_URL + `refresh_token=${refresh_token}`;
  try {
    const { data } = await http.get(url);
    console.log(data);
    saveAaccess_token(data);
  } catch (err) {
    logout();
    console.log(err);
    console.log(err.status);
  }
};

export function logout() {
  removeAllCookie();
  window.location = "/";
}

export const getAccessToken = () => {
  if (isAuthenticated()) return getCookie(ACCESS_TOKEN_KEY);
  return null;
};

const removeAllCookie = () => {
  const allCookies = getAllCookie();
  Object.keys(allCookies).map((m) => {
    removeCookie(m);
  });
};

export function getCurrentUser() {
  const user = getCookie(USER_KEY);
  return user;
}

export function hasAuthority(roles) {
  const userRoles = getCookie(AUTHORITY_KEY);
  if (!userRoles) return false;

  for (let ro of roles) {
    for (let ur of userRoles) {
      if (ur === ro) {
        return true;
      }
    }
  }
  return false;
}

export const getAuthority = () => {
  if (isAuthenticated()) return getCookie(AUTHORITY_KEY);
  else return ["ROLE_USER"];
};

export function isAuthenticated() {
  const access_token = getCookie(ACCESS_TOKEN_KEY);
  const refresh_token = getCookie("refresh_token");

  if (access_token) {
    return true;
  } else if (refresh_token) {
    obtainAccessToken(refresh_token);
    return true;
  }
  return false;
}

const saveAaccess_token = (data) => {
  var expires = new Date();
  expires.setSeconds(expires.getSeconds() + data.expires_in);
  setCookie(ACCESS_TOKEN_KEY, data.access_token, { expires });
};

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

  removeAllCookie();
  saveAaccess_token(data);

  var expires = new Date();
  expires.setDate(expires.getDate() + 7);
  setCookie(REFRESH_TOKEN_KEY, data.refresh_token, { expires });
  setCookie(USER_KEY, user, { expires });
  setCookie(AUTHORITY_KEY, authority, { expires });
}

export default {
  getCurrentUser,
  getAccessToken,
  getAuthority,
  hasAuthority,
  isAuthenticated,
  login,
  logout,
};

//https://shipapi.hotelswave.com/oauth/token?
//grant_type=password&client_id=ship_client&client_secret=ship_secret&
//username=01912239643&password=shipHotelswave
