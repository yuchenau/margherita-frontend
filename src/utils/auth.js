const JWT_TOKEN_NAME = "margherita-jwt";

export const isAuthenticated = () => {
  const jwt = localStorage.getItem(JWT_TOKEN_NAME);
  // check jwt token validation (token decode)
  return !!jwt;
};

export const setToken = (token) => {
  localStorage.setItem(JWT_TOKEN_NAME, token);
};

export const getToken = () => {
  return localStorage.getItem(JWT_TOKEN_NAME);
};

export const removeToken = () => {
  localStorage.removeItem(JWT_TOKEN_NAME);
};
