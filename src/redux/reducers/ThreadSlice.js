import {createSlice} from "@reduxjs/toolkit";

export const thread = {
    threadId: null,
    threadName: ""
}

export const threadSlice = createSlice({
    name: "user",
    initialState: thread,
    reducers: {
        setThread: (state, action) => {
            state.threadId = action.payload.threadId;
            state.threadName = action.payload.threadName;
        },
    },
});

export const {setThread} = threadSlice.actions;

export const selectThreadId = state => state.threadId;
export const selectThreadName = state => state.threadName;

export default threadSlice.reducer;