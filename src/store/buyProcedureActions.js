import { buyProcedureDispatches } from "./buyProcedureSlice";
import { phaseDispatches } from "./phaseSlice";
import { BUY_PROCEDURES_URL, JSON_HEADER } from "../http/urls";

export function fetchBuyProcedures() {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(BUY_PROCEDURES_URL);

      if (!response.ok) {
        throw new Error("Fetching of buy procedures has failed at server!");
      }

      const data = await response.json();
      return data;
    };
    try {
      const buyProcedures = await fetchData();
      dispatch(buyProcedureDispatches.replaceBuyProcedures(buyProcedures));
      buyProcedures.forEach((x) => {
        dispatch(phaseDispatches.createPhases(x.id));
        dispatch(phaseDispatches.updatePhases(x));
      });
    } catch (error) {
      console.log(error);
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
        throw new Error("Creation of buy procedure has failed at server!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const id = await postNew();
      dispatch(buyProcedureDispatches.addBuyProcedure(id));
      dispatch(phaseDispatches.createPhases(id));
      navigate(`${id.toString()}/1`);
    } catch (error) {
      console.log(error);
      throw new Error("Fetching of buy procedures has failed!");
    }
  };
}

export function updateBuyProcedure(buyProcedure, fieldName, updatedValue) {
  const updatedBuyProcedure = {
    ...buyProcedure,
    [fieldName]: updatedValue,
  };
  return async (dispatch) => {
    const putUpdate = async () => {
      const requestOptions = {
        method: "PUT",
        headers: JSON_HEADER,
        body: JSON.stringify(updatedBuyProcedure),
      };

      const response = await fetch(BUY_PROCEDURES_URL, requestOptions);

      if (!response.ok) {
        throw new Error("Updating of buy procedure has failed at server!");
      }
    };

    try {
      await putUpdate();
      dispatch(
        buyProcedureDispatches.updateBuyProcedure({
          id: buyProcedure.id,
          fieldName,
          updatedValue,
        })
      );
      dispatch(phaseDispatches.updatePhases(updatedBuyProcedure));
    } catch (error) {
      console.log(error);
      throw new Error("Fetching of buy procedures has failed!");
    }
  };
}
