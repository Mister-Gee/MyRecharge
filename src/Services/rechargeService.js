import http from "./httpServices";
import config from "../config.json";

const { Api } = config;
const recharge_service_url = Api.baseUrl + "myrecharge/recharge/";

export function get_payment_gateway_keys() {
  return http.get(recharge_service_url + "payment-gateway-services");
}

export function get_states_discos() {
  return http.get(recharge_service_url + "states-discos");
}

export function validate_customer(ccustomer_ipayload) {
  return http.post(
    recharge_service_url + "validate-customer",
    ccustomer_ipayload
  );
}

export function recharge_discount(discount) {
  return http.post(recharge_service_url + "discount", discount);
}

export function recharge_meter(recharge_payload) {
  return http.post(recharge_service_url + "recharge-meter", recharge_payload);
}
