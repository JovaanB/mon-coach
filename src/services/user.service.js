import axios from "axios";
import authHeader from "./auth-header";
const { REACT_APP_USER_URL } = process.env;

const getPublicContent = () => {
  return axios.get(REACT_APP_USER_URL + "/all");
};

const getAthleteBoard = () => {
  return axios.get(REACT_APP_USER_URL + "/athlete", { headers: authHeader() });
};

const getMasterBoard = () => {
  return axios.get(REACT_APP_USER_URL + "/master", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(REACT_APP_USER_URL + "/admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getAthleteBoard,
  getMasterBoard,
  getAdminBoard,
};
