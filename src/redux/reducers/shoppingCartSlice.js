import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    payment: {},
    adress: {},
}

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setPayment: (state, action) => {
            state.payment = action.payload
        },
        setAdress: (state, action) => {
            state.adress = action.payload
        }
    }
})

export const { setCart, setPayment, setAdress } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;