import { createSlice } from "@reduxjs/toolkit";

const buyProcedureSlice = createSlice({
  name: "buyProcedure",
  initialState: {
    buyProcedures: [],
  },
  reducers: {
    replaceBuyProcedures(state, action) {
      state.buyProcedures = action.payload;
    },
    addBuyProcedure(state, action) {
      state.buyProcedures.push({ id: action.payload });
    },
  },
});

export const buyProcedureDispatches = buyProcedureSlice.actions;

export default buyProcedureSlice;
