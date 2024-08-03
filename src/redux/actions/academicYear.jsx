import HttpInterceptor from "../../service/http-interceptor";


const http = new HttpInterceptor();

export const getAllAcademicYear = (page, status, year, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}academic?page=${page}&status=${status}&academicYear=${year}`;

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


export const createAcademicYear = (body, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}academic`;

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


export const updateAcademicYear = (body, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}academic`;

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