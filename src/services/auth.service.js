import axios from "axios";

const { REACT_APP_AUTH_URL } = process.env;

const register = ({ email, firstname, lastname, roles, password }) => {
  return axios.post(`${REACT_APP_AUTH_URL}signup`, {
    email,
    firstname,
    lastname,
    roles,
    password,
  });
};

const login = ({ email, password }) => {
  return axios
    .post(`${REACT_APP_AUTH_URL}signin`, {
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

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrent = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrent,
};
