import axios from "axios";

const BASE_URL = "http://192.168.3.48:9191/api/v1/";

export const myAxios = axios.create({
    baseURL: `${BASE_URL}`
})

myAxios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token = sessionStorage.getItem("token")
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

myAxios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);