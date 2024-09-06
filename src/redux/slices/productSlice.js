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

export const getProducts = createAsyncThunk("product", async ({ categoryId, sort, filter }) => {
    let query = `https://workintech-fe-ecommerce.onrender.com/products?`;

    if (categoryId) {
        query += `category=${categoryId}&`;
    }
    if (sort) {
        query += `sort=${sort}&`;
    }
    if (filter) {
        query += `filter=${filter}&`;
    }

    const { data } = await axios.get(query);
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
    },
    extraReducers: (builder) => {
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
            })
            .addCase(getProducts.pending, (state) => {
                state.fetchState = "FETCHING";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productList = action.payload.products;
                state.total = action.payload.total;
                state.fetchState = "FETCHED";
            })
            .addCase(getProducts.rejected, (state) => {
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
