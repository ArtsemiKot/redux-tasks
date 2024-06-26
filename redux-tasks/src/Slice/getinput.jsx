import { createSlice } from "@reduxjs/toolkit";

const getinput = createSlice({
  name: "getinput",
  initialState: "",
  reducers: {
    getStr: function (state, params) {
      return params.payload;
    },
  },
});

export const { getStr } = getinput.actions;
export default getinput.reducer;