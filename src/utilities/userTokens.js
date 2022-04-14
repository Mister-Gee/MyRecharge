// import Jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import * as config from "../config.json";

const { JwtConfig } = config;

export function getUserToken() {
  return localStorage.getItem(JwtConfig.UserKey);
}

export function setUserToken(token) {
  return localStorage.setItem(JwtConfig.UserKey, token);
}

export function getUserFromLocalStorage() {
  const token = getUserToken();
  const secret = JwtConfig.Secret;
  // let user = Jwt.decode(token, secret);
  let user = jwt_decode(token, secret);
  return user;
}

export function logout() {
  localStorage.removeItem(JwtConfig.UserKey);
  localStorage.clear();
  window.location = "/";
}
