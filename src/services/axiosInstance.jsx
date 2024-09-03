import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// İstek interceptor'ı: Her istekte token'ı ekle
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Token'ı JSON.parse olmadan al
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config; // config nesnesini döndür
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Yanıt interceptor'ı: Yanıtı doğrudan döndür
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Hata yanıtını kontrol et ve ayrıntılı hata mesajını döndür
        if (error.response) {
            // Sunucudan gelen yanıtı içeren hata
            console.error("API Yanıt Hatası:", error.response.data);
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // İstek gönderildi ama yanıt alınamadı
            console.error("API İstek Hatası:", error.request);
            return Promise.reject({ message: "No response received from server" });
        } else {
            // Diğer hatalar
            console.error("API Hatası:", error.message);
            return Promise.reject({ message: error.message });
        }
    }
);

export default axiosInstance;
