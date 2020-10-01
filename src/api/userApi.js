import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "localhost:/";
export const signIn = (user) => {
  return fetch(baseUrl, {
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
  return fetch(baseUrl, {
    method: "POST",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
};
