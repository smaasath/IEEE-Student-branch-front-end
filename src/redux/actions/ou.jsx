import HttpInterceptor from "../../service/http-interceptor";


const http = new HttpInterceptor();

export const getAllOU = (callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}ou/getOus`;

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


export const CreateOU = (data, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}ou`;

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


export const updateOU = (data, callback) => {
    const endpoint = `${import.meta.env.VITE_API_HOST}ou`;

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


export const getAllExcomMember = (page, search, ouid, acedemicId, callback) => {
        const endpoint = `${import.meta.env.VITE_API_HOST}ou/getExcom?search=${search}&ouid=${ouid}&acedemicId=${acedemicId}&page=${page}`;
        console.log(`Calling API: ${endpoint}`);
        try {
            http
                .get(endpoint)
                .then((response) => {
                    console.log("API Response: ", response); // Check what is returned
                    callback(response);
                })
                .catch((error) => {
                    console.error("API Error: ", error); // Log errors
                    callback(error.response);
                });
        } catch (error) {
            console.error("Catch Error: ", error); // Log catch block errors
            callback(error.response);
        }
    };
    