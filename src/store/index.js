import { configureStore } from "@reduxjs/toolkit";

import buyProcedureSlice from "./buyProcedureSlice";
import phaseSlice from "./phaseSlice";

const store = configureStore({
  reducer: {
    buyProcedure: buyProcedureSlice.reducer,
    phase: phaseSlice.reducer,
  },
});

export default store;
