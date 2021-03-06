import { post } from "./axios";

export const signup = (email, password) =>
  post("/users", {
    username: email,
    password: password,
  }).then((response) => response.data);

export const signin = (email, password) =>
  post("/authentication", {
    username: email,
    password: password,
  }).then((response) => response.data);
