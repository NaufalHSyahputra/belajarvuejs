import axios from "axios";
import store from "@/store";
import router from "@/router";

axios.defaults.baseURL = "http://localhost:8001/api";

// Request interceptor
axios.interceptors.request.use(request => {
  const token = store.getters["auth/token"];
  request.headers.common["Accept"] = "application/json";
  if (token) {
    request.headers.common["Authorization"] = `Bearer ${token}`;
  }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request;
});

// Response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response;

    if (status >= 500) {
      Swal.fire({
        type: "error",
        title: "Server Error",
        text: "Server Error 500",
        reverseButtons: true,
        confirmButtonText: "OK!",
        cancelButtonText: "Cancel!"
      });
    }

    if (status === 401 && store.getters["auth/check"]) {
      Swal.fire({
        type: "warning",
        title: "Token Expired",
        text: "Token Expired",
        reverseButtons: true,
        confirmButtonText: "OK!",
        cancelButtonText: "Cancel!"
      }).then(() => {
        store.commit("auth/LOGOUT");

        router.push({
          name: "login"
        });
      });
    }

    return Promise.reject(error);
  }
);

export const get = async url => {
  return await axios.get(`${url}`);
};

export const post = async (data, url) => {
  return await axios.post(`${url}`, data);
};

export const authGet = async (url, token) => {
  return await axios.get(`${url}`, data, {
    Authorization: "Bearer " + token
  });
};

export const authPost = async (data, url, token) => {
  return axios.post(`${url}`, data, {
    headers: {
      Authorization: "Bearer " + token
    }
  });
};
