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

export function forgot_password(form) {
  return http.post(account_service_url + "forgot-password", form);
}

export function validate_password_reset_code(form) {
  return http.post(account_service_url + "validate-password-reset-code", form);
}

export function reset_password(form) {
  return http.post(account_service_url + "reset-password", form);
}

export function change_password(form) {
  return http.post(account_service_url + "change-password", form);
}

export function customer_profile_update(form) {
  return http.post(account_service_url + "customer-profile-update", form);
}

export function update_information(form) {
  return http.post(account_service_url + "update-information", form);
}
