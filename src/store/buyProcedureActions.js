import { buyProcedureDispatches } from "./buyProcedureSlice";
import { BUY_PROCEDURES_URL } from "../http/urls";

export function fetchBuyProcedures() {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(BUY_PROCEDURES_URL);

      if (!response.ok) {
        throw new Error("Fetching of buy procedures has failed!");
      }

      const data = await response.json();
      return data;
    };
    const buyProcedures = await fetchData();
    dispatch(buyProcedureDispatches.replaceBuyProcedures(buyProcedures));
  };
}
