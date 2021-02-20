import Cookie from "universal-cookie";

const cookie = new Cookie();

export function setCookie(key, value, options) {
  cookie.set(key, value, options);
}

export function getCookie(key) {
  return cookie.get(key);
}

export function getAllCookie() {
  return cookie.getAll();
}

export function removeCookie(key) {
  cookie.remove(key);
}

export default {
  setCookie,
  getCookie,
  getAllCookie,
  removeCookie,
};
