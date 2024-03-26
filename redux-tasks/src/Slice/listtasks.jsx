import { createSlice } from "@reduxjs/toolkit";

const listtasks = createSlice({
    name: 'listtasks',
    initialState: { array: ['do', 'work', 'sleep', 'eat'], input: '' },
    reducers: {
        inputValue: function (state, params) {
            return { ...state, input: params.payload }
        },
        addtask: function (state, params) {
            return { ...state, array: [...state.array, state.input] }
        },
        deletetask: function (state, params) {
            const result = state.array.filter((el) => el != params.payload)
            return { ...state, array: result }
        }
    }
})

export const { inputValue, addtask, deletetask } = listtasks.actions
export default listtasks.reducer;