
import { toast } from "react-toastify";
import { setUser } from "../slices/clientSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


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

                toast.success(`Merhaba, hoşgeldin ${user.name}!`);
                return { user, token };
            })
            .catch((error) => {
                toast.warning("Login failed! Please check your details.");

                return error;
            });
    }
);

