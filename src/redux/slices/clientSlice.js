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
    selectedAddress: null
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

export const addNewAddress = createAsyncThunk(
    'client/addNewAddress',
    async (addressData) => {
        const response = await axiosInstance.post('/user/address', addressData);
        return response.data;
    }
);

export const updateExistingAddress = createAsyncThunk(
    'client/updateExistingAddress',
    async (addressData) => {
        const response = await axiosInstance.put('/user/address', addressData);
        return response.data;
    }
);

export const addNewCard = createAsyncThunk(
    'client/addNewCard',
    async (cardData) => {
        const response = await axiosInstance.post('/user/card', cardData);
        return response.data;
    }
);

export const fetchCards = createAsyncThunk(
    'client/fetchCards',
    async () => {
        const response = await axiosInstance.get('/user/card');
        return response.data;
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
        },
        setSelectedAddress(state, action) {
            state.selectedAddress = action.payload;
        },
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
            })
            .addCase(addNewAddress.fulfilled, (state, action) => {
                state.addressList.push(action.payload);
            })
            .addCase(addNewAddress.rejected, (state, action) => {
                console.error('Adres eklenirken hata oluştu:', action.error);
            })
            .addCase(updateExistingAddress.fulfilled, (state, action) => {
                const index = state.addressList.findIndex(address => address.id === action.payload.id);
                if (index !== -1) {
                    state.addressList[index] = action.payload;
                }
            })
            .addCase(updateExistingAddress.rejected, (state, action) => {
                console.error('Adres güncellenirken hata oluştu:', action.error);
            })
            .addCase(addNewCard.fulfilled, (state, action) => {
                state.creditCards.push(action.payload);
            })
            .addCase(addNewCard.rejected, (state, action) => {
                console.error('Kart eklenirken hata oluştu:', action.error);
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.creditCards = action.payload;
            })
            .addCase(fetchCards.rejected, (state, action) => {
                console.error('Kartlar alınırken hata oluştu:', action.error);
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
    setLogout,
    setSelectedAddress
} = clientSlice.actions;
export default clientSlice.reducer;