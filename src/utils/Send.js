import axios from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 1000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    if (error.response && error.response.status === 404) {
      console.clear();
    }
    return Promise.reject(error);
  }
);

export default instance;
