import HttpInterceptor from "../../service/http-interceptor";

const http = new HttpInterceptor();


export const addComment = (body, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}comment`;
  
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
      console.log("Caught Error:", error.response);
      callback(error.response);
    }
  };

export const getAllCommentsByTask = (taskId, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}comment/${taskId}`;
  
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