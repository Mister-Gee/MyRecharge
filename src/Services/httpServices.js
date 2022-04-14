import axios from "axios";
import * as config from "../config.json";
import { getUserToken } from "../utilities/userTokens";

const { Api } = config;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("An exception occured.Logging the error", error);
  }
  return Promise.reject(error);
});

// Add a request interceptor to have a header token bearer
axios.interceptors.request.use(function (config) {
  const bearerToken = "bearer " + getUserToken();
  config.headers[Api.AuthKey] = bearerToken;

  return config;
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
