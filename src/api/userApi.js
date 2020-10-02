import { handleResponse, handleError } from "./apiUtils";
const registerUrl = "https://vitanova.herokuapp.com/api/accounts/register/";
const loginUrl = "https://vitanova.herokuapp.com/api/token/jwt";

export const signIn = (user) => {
  return fetch(loginUrl, {
    method: "POST",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const signUp = (user) => {
  return fetch(registerUrl, {
    method: "POST",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
};
