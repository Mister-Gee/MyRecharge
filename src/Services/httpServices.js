import axios from "axios";
import config from "../config.json";
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
axios.interceptors.request.use(function (configuration) {
  //const bearerToken = "bearer " + getUserToken();
  configuration.headers[Api.AuthKey] = getUserToken();
  configuration.headers[Api.ApiKeyName] = Api.ApiKeyValue;

  return configuration;
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
