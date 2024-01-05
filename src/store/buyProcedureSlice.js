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
    updateBuyProcedure(state, action) {
      const buyProcedure = state.buyProcedures.filter(
        (x) => x.id === action.payload.id
      )[0];
      buyProcedure[action.payload.fieldName] = action.payload.updatedValue;
    },
  },
});

export const buyProcedureDispatches = buyProcedureSlice.actions;

export default buyProcedureSlice;
