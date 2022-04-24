import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UsersSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});