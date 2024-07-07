import HttpInterceptor from "../../service/http-interceptor";


const http = new HttpInterceptor();

export const getAllAcademicYear = (page,status,year,callback) =>  {
  const endpoint = `http://localhost:8080/api/v1/academic?page=${page}&status=${status}&academicYear=${year}`;

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