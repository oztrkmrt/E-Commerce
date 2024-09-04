import { toast } from "react-toastify";
import { setUser } from "../slices/clientSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "@/services/axiosInstance";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    ({ email, password, rememberMe }, { dispatch }) => {
        return axios
            .post("https://workintech-fe-ecommerce.onrender.com/login", {
                email,
                password,
            })
            .then((response) => {
                const { token, name, email, role_id } = response.data;

                const user = { name, email, role_id };

                dispatch(setUser(user));

                if (rememberMe) {
                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(user));
                }

                toast.success(`Welcome ${user.name}!`);
                return { user, token };
            })
            .catch((error) => {
                toast.warning("Login failed!");

                return error;
            });
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

