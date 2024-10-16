
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

export const assignTask = (body, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}task/assign`;

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


// export const getExcomTask = (ouid, callback) => {
//   const endpoint = `${import.meta.env.VITE_API_HOST}task/${ouid}`;

//   try {
//     http
//       .get(endpoint)
//       .then((response) => {
//         callback(response);
//       })
//       .catch((error) => {
//         callback(error.response);
//       });
//   } catch (error) {
//     callback(error.response);
//   }
// };

export const getExcomTask = (ouid, search, status, user_id, page, priority, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}task/${ouid}?search=${search}&status=${status}&user_id=${user_id}&page=${page}&priority=${priority}`;

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
