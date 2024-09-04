import { createAsyncThunk } from "@reduxjs/toolkit";


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

/*
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCategories, setFetchState } from "../redux/productSlice";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  (endpoint, { dispatch, getState }) => {
    const state = getState();
    if (state.client.fetchState === "FETCHED") {
      return Promise.resolve();
    }

    dispatch(setFetchState("FETCHING"));
    return axios
      .get(`https://workintech-fe-ecommerce.onrender.com${endpoint}`)
      .then((response) => {
        dispatch(setCategories(response.data));
        dispatch(setFetchState("FETCHED"));
      })
      .catch((error) => {
        dispatch(setFetchState("FAILED"));
        console.error("Error fetching roles:", error);

        return error;
      });
  }
);
*/