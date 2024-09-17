import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    timeout: 10000,
    headers: { Authorization: "" },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            // Burada sadece bir flag set edelim
            localStorage.setItem("authError", "true");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;