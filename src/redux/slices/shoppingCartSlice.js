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
        addToCart: (state, action) => {
            const { product } = action.payload;
            const existingItem = state.cart.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.cart.push({ count: 1, checked: true, product });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.cart = state.cart.filter(item => item.product.id !== productId);
        },
        updateItemCount: (state, action) => {
            const { productId, count } = action.payload;
            const item = state.cart.find(item => item.product.id === productId);
            if (item) {
                item.count = count;
            }
        },
        toggleItemCheck: (state, action) => {
            const productId = action.payload;
            const item = state.cart.find(item => item.product.id === productId);
            if (item) {
                item.checked = !item.checked;
            }
        },
        setPayment: (state, action) => {
            state.payment = action.payload;
        },
        setAdress: (state, action) => {
            state.adress = action.payload;
        }
    }
})

export const { addToCart, removeFromCart, updateItemCount, toggleItemCheck, setPayment, setAdress } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;