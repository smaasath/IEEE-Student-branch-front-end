import axios from "axios";
import Cookies from "js-cookie";


class HttpInterceptor {
    constructor() {
        const defaultOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };
        const instance = axios.create(defaultOptions);

        instance.interceptors.request.use(
            async (request) => {

                try {
                    const authToken = Cookies.get('token', { path: '/' });
                   

                    if (authToken) {
                        request.headers.Authorization = "Bearer " + authToken.toString();
                    }
                } catch (error) {
                    console.log(error)
                }
                return request;
            },

        );

        instance.interceptors.response.use((response) => {
            return response;
        }, (error) => {

            if (!error.response) {

                console.log('[ERROR]', ' [HTTP Interceptor, Network Error', error);

            } else {

                if (error.response.status) {
                    switch (error.response.status) {
                        case 401: {
                            console.log('[ERROR]', ' [HTTP Interceptor, Status Code]', error.response.status);
                            break;
                        }
                        default: {
                            console.log('[ERROR]', ' [HTTP Interceptor, Status Code]', error.response.status);
                            break;
                        }
                    }
                }
                return Promise.reject(error);
            }
        });

        return instance;
    }
}

export default HttpInterceptor;