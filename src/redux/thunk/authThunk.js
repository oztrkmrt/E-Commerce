import axiosInstance from "@/services/axiosInstance";
import { toast } from "react-toastify";
import { setUser } from "../slices/clientSlice";

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    try {
        const response = await axiosInstance.post('/login', { email, password });

        const { token, user } = response.data;

        if (token) {
            // Token'ı localStorage'a kaydet
            if (rememberMe) {
                localStorage.setItem('token', token);
            }

            // Kullanıcıyı Redux store'a kaydet
            dispatch(setUser(user));

            // Kullanıcıyı önceki sayfaya yönlendir veya ana sayfaya
            window.location.href = document.referrer || '/';
        } else {
            throw new Error("Yanıt içinde geçerli bir token bulunamadı.");
        }
    } catch (error) {
        toast.error("Error occurred during login. Please try again.");
        console.error("Login error:", error);
        return Promise.reject(error);
    }
};
