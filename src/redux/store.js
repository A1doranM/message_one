import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UsersSlice";
import threadReducer from "./reducers/ThreadSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        thread: threadReducer
    },
});

export default store;