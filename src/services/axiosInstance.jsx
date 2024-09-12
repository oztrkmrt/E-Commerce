import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
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
            // Token geçersiz veya süresi dolmuş, kullanıcıyı logout yap.
            localStorage.removeItem("token");
            history.push("/login");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;