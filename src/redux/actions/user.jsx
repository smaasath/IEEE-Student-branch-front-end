import HttpInterceptor from "../../service/http-interceptor";
import Cookies from "js-cookie";

const http = new HttpInterceptor();

export const userLogin = (body, callback) => (dispatch) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}auth/authenticate`;

  try {
    http
      .post(endpoint, body)
      .then((response) => {
        callback(response);
        if (response.status === 200) {
          const cookieOptions = {
            path: "/",
          };
          console.warn("cookie");
          Cookies.set(
            "token",
            response?.data?.data?.access_token,
            cookieOptions
          );
        }
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};

export const userRegistration = (body, callback) => (dispatch) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}auth/register`;

  try {
    http
      .post(endpoint, body)
      .then((response) => {
        callback(response);
        if (response.status === 200) {
          const cookieOptions = {
            path: "/",
          };
          console.warn("cookie");
          Cookies.set(
            "token",
            response?.data?.data?.access_token,
            cookieOptions
          );
        }
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};
