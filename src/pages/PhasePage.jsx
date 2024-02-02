import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBuyProcedure } from "../store/buyProcedureActions";
import Phase1 from "../components/phases/Phase1";
import Phase2 from "../components/phases/Phase2";
import Phase3 from "../components/phases/Phase3";
import PhaseNavBar from "../components/phases/PhaseNavBar";

export default function PhasePage() {
  const buyProcedures = useSelector(
    (state) => state.buyProcedure.buyProcedures
  );
  const phaseInfos = useSelector((state) => state.phase.phaseInfos);
  const { id, phaseId } = useParams();
  const dispatch = useDispatch();

  const buyProcedure =
    buyProcedures && buyProcedures.filter((x) => x.id.toString() === id)[0];
  const phaseInfo = phaseInfos && buyProcedure && phaseInfos[buyProcedure.id];

  function onChange(value, identifier) {
    if (value !== "")
      dispatch(updateBuyProcedure(buyProcedure, identifier, value));
  }

  let Component;
  switch (phaseId) {
    case "1":
      Component = Phase1;
      break;
    case "2":
      Component = Phase2;
      break;
    case "3":
      Component = Phase3;
      break;
    default:
      // If this wasn't a prototype, error handling would go here
      throw new Error("Unknown phase");
  }

  return (
    <>
      {buyProcedure && (
        <>
          <PhaseNavBar phaseInfo={phaseInfo} phaseId={phaseId} />

          <div className="buy-procedure-phase-wrapper">
            <h2>
              {buyProcedure.title ? buyProcedure.title : "Nieuwe procedure"}
            </h2>
            <Component buyProcedure={buyProcedure} onChange={onChange} />
          </div>
        </>
      )}
    </>
  );
}
