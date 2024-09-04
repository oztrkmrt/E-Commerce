import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCategories, setFetchState } from "../slices/productSlice";


export const fetchCategoriesThunk = createAsyncThunk(
    "categories/fetchCategories",
    async (_, { dispatch, getState }) => {
        const state = getState();
        if (state.product.fetchState === "FETCHED") {
            return Promise.resolve();
        }
        dispatch(setFetchState("FETCHING"));
        try {
            const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");
            dispatch(setCategories(response.data));
            dispatch(setFetchState("FETCHED"));
        } catch (error) {
            dispatch(setFetchState("FAILED"));
            console.error("Error fetching roles:", error);
            return error;
        }
    }

)