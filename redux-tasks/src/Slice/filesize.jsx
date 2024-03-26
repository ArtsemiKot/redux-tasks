import { createSlice } from "@reduxjs/toolkit";

const filesize = createSlice({
    name: 'filesize',
    initialState: '',
    reducers: {
        increment: function (state) {
            return state +1
        },
        decrement: function (state) {
            return state -1
        },
    }
})

export const { increment, decrement } = filesize.actions
export default filesize.reducer;