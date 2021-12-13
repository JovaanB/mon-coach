import axios from "axios";
import authHeader from "../helpers/auth-header";

const { REACT_APP_AUTH_URL } = process.env;

const register = ({ email, firstname, lastname, roles, password }) => {
  return axios.post(`${REACT_APP_AUTH_URL}/signup`, {
    email,
    firstname,
    lastname,
    roles,
    password,
  });
};

const login = ({ email, password }) => {
  return axios
    .post(`${REACT_APP_AUTH_URL}/signin`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const join = ({ firstname, lastname, password, email, token }) => {
  return axios.post(`${REACT_APP_AUTH_URL}/join?token=${token}`, {
    firstname,
    lastname,
    password,
    email,
  });
};

const invite = ({ email, user }) => {
  return axios.post(
    `${REACT_APP_AUTH_URL}/invite`,
    {
      email,
      user,
    },
    { headers: authHeader() }
  );
};

const getInvitation = ({ token }) => {
  return axios.get(`${REACT_APP_AUTH_URL}/getInvitation?token=${token}`);
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrent = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const toExports = {
  register,
  login,
  join,
  invite,
  getInvitation,
  logout,
  getCurrent,
};

export default toExports;
