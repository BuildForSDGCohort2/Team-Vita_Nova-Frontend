import axios from "axios";
const API_URL = "https://lamp-api.herokuapp.com";

export const login = user => {
  return axios
    .post(API_URL + "/api/token/jwt", {
      email: user.email,
      password: user.password
    })
    .then(response => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

export const logout = () => localStorage.removeItem("user");

export const register = user => {
  return axios.post(API_URL + "/api/accounts/register/", {
    email: user.email,
    password: user.password,
    first_name: user.first_name,
    last_name: user.last_name,
    company_name: user.company_name,
    website: user.website,
    role: user.role,
    corporate: user.corporate
  });
};

export const verifyEmail = () => {
  return axios.post(API_URL + "/api/accounts/verify-registration/", key);
};
