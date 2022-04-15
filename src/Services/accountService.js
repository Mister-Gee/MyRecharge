import http from "./httpServices";
import config from "../config.json";

const { Api } = config;
const account_service_url = Api.baseUrl + "myrecharge/account/";

export function login(account) {
  return http.post(account_service_url + "login", account);
}

export function quick_register(form) {
  return http.post(account_service_url + "quick-register", form);
}

export function register(form) {
  return http.post(account_service_url + "register", form);
}
