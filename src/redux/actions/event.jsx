import HttpInterceptor from "../../service/http-interceptor";


const http = new HttpInterceptor();

export const getAllEvents = (callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}event`;

  try {
    http
      .get(endpoint)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};
