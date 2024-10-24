import HttpInterceptor from "../../service/http-interceptor";

const http = new HttpInterceptor();


export const addAccountTransection = (body, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}transaction/account`;

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


export const addouTransection = (body, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}transaction/wallet`;

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