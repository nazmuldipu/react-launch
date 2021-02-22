import http from "./httpService";

// const apiEndpoint ='api/v1/users'

export async function register(user) {
  const url = `/register?name=${user.name}${
    user.email ? "&email=" + user.email : ""
  }&username=${user.username}&password=${user.password}`;
  const { data } = await http.post(url);
  return data;
}

export default {
  register,
};
