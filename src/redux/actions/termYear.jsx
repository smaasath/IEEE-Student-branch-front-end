import HttpInterceptor from "../../service/http-interceptor";


const http = new HttpInterceptor();

export const getAllTermYear = (callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}termyear`;

  try {
    http
      .get(endpoint)
      .then((response) => {
        console.log("res", response)
        callback(response);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};


export const createTermYear = (body, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}termyear`;

  try {
    http
      .post(endpoint, body)
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


export const updateTermYear = (body, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}termyear`;

  try {
    http
      .put(endpoint, body)
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