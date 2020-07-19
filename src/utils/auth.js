const JWT_TOKEN_NAME = "margherita-jwt"

export const isAuthenticated = () => {
    const jwt = localStorage.getItem(JWT_TOKEN_NAME);
    return !!jwt;
}

export const getToken = () => {
    return localStorage.getItem(JWT_TOKEN_NAME);
}

export const setToken = (token) => {
    localStorage.setItem(JWT_TOKEN_NAME, token);
}
