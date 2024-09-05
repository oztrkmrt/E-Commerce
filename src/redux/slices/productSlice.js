import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: '',
    fetchState: 'NOT_FETCHED',
}

export const getCategories = createAsyncThunk("category", async () => {
    const { data } = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");
    return data;
});


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setProductList: (state, action) => {
            state.productList = action.payload;
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        },
        setFetchState: (state, action) => {
            state.fetchState = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.fetchState = "FETCHING";
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.fetchState = "FETCHED";
            })
            .addCase(getCategories.rejected, (state) => {
                state.fetchState = "FAILED";
            });
    }

});

export const {
    setCategories,
    setProductList,
    setTotal,
    setFetchState,
    setLimit,
    setOffset,
    setFilter
} = productSlice.actions;

export default productSlice.reducer;
