import { createSlice } from "@reduxjs/toolkit";

const getlanguage = createSlice({
    name: 'getlanguage',
    initialState: 'rus',
    reducers: {
        getlang: function (state, params) {
            return params.payload
        },
    }
})

export const { getlang } = getlanguage.actions
export default getlanguage.reducer;
