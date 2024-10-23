import HttpInterceptor from "../../service/http-interceptor";

const http = new HttpInterceptor();

export const createServiceLetterRequest = (body, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}service`;

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

export const getAllServiceRequests = (search, status, page, callback) => {
  const endpoint = `${
    import.meta.env.VITE_API_HOST
  }service?search=${search}&status=${status}&page=${page}`;

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

export const getMyServiceRequests = (page, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}service/my?page=${page}`;

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

export const editServiceRequestStatus = (request_id, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}service/${request_id}`;

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

export const deleteServiceLetterRequest = (request_id, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}service/${request_id}`;

  try {
    http
      .delete(endpoint)
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
