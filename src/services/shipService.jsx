import http from "./httpService";
import auth from "./authServices";

const apiEndpoint = "api/v1/ships";
const adminEndpoint = "api/v1/admin/ships";

const getUrlFor = (reqAuth, path, param) => {
  if (!reqAuth) return apiEndpoint;

  const role = auth.getAuthority();
  switch (role[0]) {
    case "ROLE_ADMIN":
      return (
        adminEndpoint + `${path}?access_token=${auth.getAccessToken()}&${param}`
      );
    default:
      return apiEndpoint;
  }
};

export const getAllShip = (page = 0) => {
  const param = `page=${page}&`;
  return http.get(apiEndpoint + `?${param}`);
};

export const saveShip = (ship) => {
  const url = getUrlFor(true, null, null);
  if (url) return http.post(url, ship);
  return null;
};

export const getShipMap = (id, startDate, endDate) => {
  const param = `startDate=${startDate}&endDate=${endDate}&`;
  const url = getUrlFor(true, `/shipMap/${id}`, param);
  return http.get(url);
};

export const updateMap = (id, date, value) => {
  const param = `date=${date}&value=${value}&`;
  const url = getUrlFor(true, `/updateMap/${id}`, param);
  return http.put(url);
};

export default {
  getAllShip,
  getShipMap,
  saveShip,
};
