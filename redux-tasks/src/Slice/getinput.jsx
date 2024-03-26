import { createSlice } from "@reduxjs/toolkit";

const getinput = createSlice({
    name: 'getinput',
    initialState: '',
    reducers: {
        getStr: function (state) {
            return state
        },
    }
})

export const { getStr } = getinput.actions
export default getinput.reducer;
