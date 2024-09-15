import { toast } from "react-toastify";
import { setUser } from "../slices/clientSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/services/axiosInstance";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password, rememberMe }, { dispatch }) => {
        try {
            const response = await axiosInstance.post("/login", {
                email,
                password,
            });

            const { token, name, email: userEmail, role_id } = response.data;
            const user = { name, email: userEmail, role_id };

            dispatch(setUser(user));

            localStorage.setItem("token", token);

            if (rememberMe) {
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                sessionStorage.setItem("user", JSON.stringify(user));
            }

            toast.success(`Welcome ${user.name}!`);
            return { user, token };
        } catch (error) {
            toast.warning("Login failed!");
            throw error;
        }
    }
);

export const verifyToken = createAsyncThunk(
    "auth/verifyToken",
    ({ dispatch }) => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                axiosInstance.defaults.headers.common["Authorization"] = token;
                const response = axiosInstance.get("/verify");
                const user = response.data;
                dispatch(setUser(user));
                if (user.token) {
                    localStorage.removeItem("token");
                    localStorage.setItem("token", JSON.stringify(user.token));
                }
            }
            catch (error) {
                if (error) {
                    localStorage.removeItem("token");
                    delete axiosInstance.defaults.headers.common["Authorization"];
                }
            }
        }
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, { dispatch }) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        delete axiosInstance.defaults.headers.common["Authorization"];
        dispatch(setUser({})); // Kullanıcı state'ini temizle
        toast.success("Logged out successfully!");
    }
);

