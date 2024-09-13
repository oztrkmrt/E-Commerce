import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '@/services/axiosInstance';
const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: '',
    sort: '',
    fetchState: 'NOT_FETCHED',
    currentProduct: null,
    loading: false,
    error: null,
}


export const getCategories = createAsyncThunk("category", async () => {
    const { data } = await axiosInstance.get("/categories");
    return data;
});

export const getProducts = createAsyncThunk("product", async ({ categoryId, sort, filter, limit = 25, offset = 0 }) => {
    let query = `/products?limit=${limit}&offset=${offset}`;

    if (categoryId) {
        query += `&category=${categoryId}`;
    }
    if (sort) {
        query += `&sort=${sort}`;
    }
    if (filter) {
        query += `&filter=${filter}`;
    }

    const { data } = await axiosInstance.get(query);
    return data;
});

export const getProductDetail = createAsyncThunk(
    'product/getProductDetail',
    async (productId, { rejectWithValue }) => {
        try {
            if (!productId) {
                throw new Error('Product ID is undefined');
            }
            const response = await axiosInstance.get(`/products/${productId}`);

            if (!response.data) {
                throw new Error('No data received from API');
            }

            return response.data;
        } catch (error) {
            console.error('Error in getProductDetail:', error);
            return rejectWithValue(error.message || 'An error occurred while fetching product details');
        }
    }
);

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
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload;
        }
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
            })
            .addCase(getProductDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.currentProduct = action.payload;
                state.loading = false;
            })
            .addCase(getProductDetail.rejected, (state, action) => {
                console.error('Rejected action payload:', action.payload);
                state.error = action.payload;
                state.loading = false;
                state.currentProduct = null;
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
    setFilter,
    setSort,
    setCurrentProduct
} = productSlice.actions;
export default productSlice.reducer;
