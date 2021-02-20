import http from "./httpService";

const apiEndpoint =
  "/oauth/token?grant_type=password&client_id=ship_client&client_secret=ship_secret&";

export async function login(username, password) {
  const url = apiEndpoint + `username=${username}&password=${password}`;
  const { data } = await http.post(url);
  console.log(data);
  //   localStorage.setItem(tokenKey, jwt);
}

export default {
  login,
};

//https://shipapi.hotelswave.com/oauth/token?
//grant_type=password&client_id=ship_client&client_secret=ship_secret&
//username=01912239643&password=shipHotelswave
