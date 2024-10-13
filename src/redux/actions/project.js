import HttpInterceptor from "../../service/http-interceptor";

const http = new HttpInterceptor();

export const CreateProject = (data, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}project`;

  try {
    http
      .post(endpoint, data)
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

export const getAllProject = (page, search, termid, status, ouid, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST
    }project?ouid=${ouid}&termYearId=${termid}&search=${search}&status=${status}&page=${page}`;

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

export const updateProject = (id, data, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}project/${id}`;

  try {
    http
      .put(endpoint, data)
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

export const getProjectCount = (search, termid, ouid, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST
    }project/count?ouid=${ouid}&termYearId=${termid}&search=${search}`;

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


export const deleteProject = (id, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}project/${id}`;

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


export const updateDurationProject = (id, data, callback) => {
  const endpoint = `${import.meta.env.VITE_API_HOST}project/duration/${id}`;

  try {
    http
      .put(endpoint, data)
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
