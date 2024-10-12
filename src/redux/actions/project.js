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