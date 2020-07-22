import { post } from "./axios";

export const signin = (email, password) =>
  // === return following statements
  // console.log(email, password);
  post("/authentication", {
    username: email,
    password: password,
  }).then((response) => response.data);
