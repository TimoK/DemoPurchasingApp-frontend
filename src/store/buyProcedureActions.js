import { buyProcedureDispatches } from "./buyProcedureSlice";
import { BUY_PROCEDURES_URL, JSON_HEADER } from "../http/urls";

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
    try {
      const buyProcedures = await fetchData();
      dispatch(buyProcedureDispatches.replaceBuyProcedures(buyProcedures));
    } catch {
      throw new Error("Fetching of buy procedures has failed!");
    }
  };
}

export function createBuyProcedureAndNavigate(navigate) {
  return async (dispatch) => {
    const postNew = async () => {
      const requestOptions = {
        method: "POST",
        headers: JSON_HEADER,
        body: {},
      };

      const response = await fetch(BUY_PROCEDURES_URL, requestOptions);

      if (!response.ok) {
        throw new Error("Creation of buy procedure has failed!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const id = await postNew();
      dispatch(buyProcedureDispatches.addBuyProcedure(id));
      navigate(id.toString());
    } catch {
      throw new Error("Creation of buy procedure has failed!");
    }
  };
}
