import { createSlice } from "@reduxjs/toolkit";

const counter2 = createSlice({
    name: 'counter2',
    initialState: 0,
    reducers: {
        increment: function (state) {
            return state +1
        },
        decrement: function (state) {
            return state -1
        },
    }
})

export const { increment, decrement } = counter2.actions
export default counter2.reducer;
