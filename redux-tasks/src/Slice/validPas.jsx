import { createSlice } from "@reduxjs/toolkit";

const validPass = createSlice({
    name: 'validPas',
    initialState: '',
    reducers: {
        validPas: function (state, params) {
            return params.payload
        },
    }
})

export const { validPas } = validPass.actions
export default validPass.reducer;