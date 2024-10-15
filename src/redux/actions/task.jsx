
import HttpInterceptor from "../../service/http-interceptor";

const http = new HttpInterceptor();

export const createTask = (body, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}task`;

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
    console.log('Caught Error:', error.response);
    callback(error.response);
  }
};


export const getExcomTask = (ouid, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}task/${ouid}`;

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


export const UpdateExcomTaskStatus = (task_id, status, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}task/status/${task_id}?status=${status}`;

  try {
    http
      .put(endpoint)
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
