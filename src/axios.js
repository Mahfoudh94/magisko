import axios from "axios";
import router from "./router";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/api`
})
axiosClient.interceptors.request.use((config) => {
    const token = "123";
    config.headers.Accept = "application/json"
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
axiosClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        return error;
    }
    throw error;
})
export default axiosClient;