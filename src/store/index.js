import { configureStore } from "@reduxjs/toolkit";

import buyProcedureSlice from "./buyProcedureSlice";

const store = configureStore({
  reducer: { buyProcedure: buyProcedureSlice.reducer },
});

export default store;
