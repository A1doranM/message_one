import {createSlice} from "@reduxjs/toolkit";

export const user = {
    uid: "",
    photo: "",
    email: "",
    displayName: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: user
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const {login, logout} = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;