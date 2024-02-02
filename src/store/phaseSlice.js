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
      let phaseInfo = { phaseCompleted: [], phaseEnabled: [], currentPhase: 0 };
      for (let i = 0; i < PHASE_NUM; ++i) {
        phaseInfo.phaseCompleted[i] = false;
        phaseInfo.phaseEnabled[i] = i === 0;
      }
      state.phaseInfos[id] = phaseInfo;
    },
    updatePhases(state, action) {
      const buyProcedure = action.payload;
      const phaseInfo = state.phaseInfos[buyProcedure.id];

      for (let i = 0; i < PHASE_NUM; ++i) {
        let phaseComplete = true;
        buyProcedurePhaseCombinations[i].forEach((columnName) => {
          if (
            buyProcedure[columnName] === undefined ||
            buyProcedure[columnName] === null ||
            (typeof buyProcedure[columnName] === "number" &&
              buyProcedure[columnName] === 0)
          ) {
            phaseComplete = false;
          }
        });
        phaseInfo.phaseCompleted[i] = phaseComplete;
        phaseInfo.phaseEnabled[i] = i === 0 || phaseInfo.phaseCompleted[i - 1];
        if (phaseInfo.phaseEnabled[i]) phaseInfo.currentPhase = i;
      }
    },
  },
});

export const phaseDispatches = phaseSlice.actions;

export default phaseSlice;
