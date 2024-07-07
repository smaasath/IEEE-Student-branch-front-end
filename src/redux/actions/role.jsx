import HttpInterceptor from "../../service/http-interceptor";


const http = new HttpInterceptor();

export const getAllRoles = (page, search, type, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}role?search=${search}&type=${type}&page=${page}`;

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

export const createRole = (body, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}role`;
  
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
  
  
  export const updateRole = (body, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}role`;
  
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