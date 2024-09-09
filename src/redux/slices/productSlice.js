import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: '',
    sort: '',
    fetchState: 'NOT_FETCHED',
    product: {
        "id": 322,
        "name": "Gri Regular Astar",
        "description": "Gri Regular Astar Detaylı Dokuma Blazer Ceket TWOAW20CE0316",
        "price": 461.99,
        "stock": 140,
        "store_id": 1,
        "category_id": 3,
        "rating": 3.64,
        "sell_count": 281,
        "images": [
            {
                "url": "https://cdn.dsmcdn.com/ty181/product/media/images/20210923/14/135755138/57457659/1/1_org_zoom.jpg",
                "index": 0
            }
        ]
    },
    loading: false,
    error: null,
}
export const getCategories = createAsyncThunk("category", async () => {
    const { data } = await axios.get("https://workintech-fe-ecommerce.onrender.com/categories");
    return data;
});

export const getProducts = createAsyncThunk("product", async ({ categoryId, sort, filter, limit = 25, offset = 0 }) => {
    let query = `https://workintech-fe-ecommerce.onrender.com/products?limit=${limit}&offset=${offset}`;

    if (categoryId) {
        query += `&category=${categoryId}`;
    }
    if (sort) {
        query += `&sort=${sort}`;
    }
    if (filter) {
        query += `&filter=${filter}`;
    }

    const { data } = await axios.get(query);
    return data;
});

export const getProductDetail = createAsyncThunk(
    'product/getProductDetail',
    async (productId) => {
        const response = await axios.get(`https://workintech-fe-ecommerce.onrender.com/products/${productId}`);
        return response.data;
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
        setProduct: (state, action) => {
            state.product = action.payload;
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
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.currentProduct = action.payload;
                state.loading = false;
            })
            .addCase(getProductDetail.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
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
    setProduct
} = productSlice.actions;
export default productSlice.reducer;
