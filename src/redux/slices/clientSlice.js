import axiosInstance from '@/services/axiosInstance';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "",
    language: "",
    token: null,
}

export const fetchAddresses = createAsyncThunk(
    'client/fetchAddresses',
    async () => {
        const response = await axiosInstance.get('/user/address');
        return response.data;
    }
);

export const deleteAddress = createAsyncThunk(
    'client/deleteAddress',
    async (addressId) => {
        await axiosInstance.delete(`/user/address/${addressId}`);
        return addressId;
    }
);

const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        setUser(state, action) {
            const { email, name, password } = action.payload;
            state.user = {
                ...state.user,
                email,
                name,
                password,
            };
        },
        setAddressList(state, action) {
            state.addressList = action.payload;
        },
        addAddress(state, action) {
            state.addressList.push(action.payload);
        },
        updateAddress(state, action) {
            const index = state.addressList.findIndex(address => address.id === action.payload.id);
            if (index !== -1) {
                state.addressList[index] = action.payload;
            }
        },
        removeAddress(state, action) {
            state.addressList = state.addressList.filter(address => address.id !== action.payload);
        },
        setRoles(state, action) {
            state.roles = action.payload
        },
        setTheme(state, action) {
            state.theme = action.payload
        },
        setLanguage(state, action) {
            state.language = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        setLogout(state) {
            state.user = {};
            state.token = null;
            state.roles = [];
            state.addressList = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddresses.fulfilled, (state, action) => {
                state.addressList = action.payload;
            })
            .addCase(fetchAddresses.rejected, (state, action) => {
                console.error('Adresler alınırken hata oluştu:', action.error);
            })
            .addCase(deleteAddress.fulfilled, (state, action) => {
                state.addressList = state.addressList.filter(address => address.id !== action.payload);
            })
            .addCase(deleteAddress.rejected, (state, action) => {
                console.error('Adres silinirken hata oluştu:', action.error);
            });
    }
})

export const {
    setUser,
    setAddressList,
    addAddress,
    updateAddress,
    removeAddress,
    setRoles,
    setTheme,
    setLanguage,
    setToken,
    setLogout
} = clientSlice.actions;
export default clientSlice.reducer;