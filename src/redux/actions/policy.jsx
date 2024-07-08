import HttpInterceptor from "../../service/http-interceptor";


const http = new HttpInterceptor();

export const getAllPolicy = (page, search, type, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}policy?search=${search}&type=${type}&page=${page}`;

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

export const createPolicy = (body, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}policy`;
  
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
  
  
  export const updatePolicy = (body, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}policy`;
  
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


  export const assignPolicy = (body, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}policy/assign`;
  
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