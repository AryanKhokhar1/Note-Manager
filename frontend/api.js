import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "/choreo-apis/notemanager/backend/v1";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
})

api.interceptors.request.use(
    (configs) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            configs.headers.Authorization = `Bearer ${token}`
        }
        return configs;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;
