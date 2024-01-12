import { createSlice } from "@reduxjs/toolkit";
import { PHASE_NUM } from "../constants";
import buyProcedurePhaseCombinations from "../data/buyProcedurePhaseCombinations.json";

const phaseSlice = createSlice({
  name: "phase",
  initialState: {
    phaseInfos: [],
  },
  reducers: {
    createPhases(state, action) {
      const id = action.payload;
      let phaseInfo = { phases: [] };
      for (let i = 0; i < PHASE_NUM; ++i) {
        phaseInfo.phases[i] = false;
      }
      state.phaseInfos[id] = phaseInfo;
    },
    updatePhases(state, action) {
      const buyProcedure = action.payload;
      const phaseInfo = state.phaseInfos[buyProcedure.id];

      console.log(buyProcedure);
      for (let i = 0; i < PHASE_NUM; ++i) {
        let phaseComplete = true;
        console.log(i);
        buyProcedurePhaseCombinations[i].forEach((columnName) => {
          console.log(buyProcedure[columnName]);
          if (
            buyProcedure[columnName] === undefined ||
            buyProcedure[columnName] === null ||
            (typeof buyProcedure[columnName] === "number" &&
              buyProcedure[columnName] === 0)
          ) {
            phaseComplete = false;
          }
        });
        phaseInfo.phases[i] = phaseComplete;
      }
    },
  },
});

export const phaseDispatches = phaseSlice.actions;

export default phaseSlice;
