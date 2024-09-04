import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    adressList: [],
    creditCards: [],
    roles: [],
    theme: "",
    language: "",
}


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
        setRoles(state, action) {
            state.roles = action.payload
        },
        setTheme(state, action) {
            state.theme = action.payload
        },
        setLanguage(state, action) {
            state.language = action.payload
        }
    }
})

export const { setUser, setRoles, setTheme, setLanguage } = clientSlice.actions;
export default clientSlice.reducer;