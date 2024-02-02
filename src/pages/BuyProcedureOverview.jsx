import { useSelector, useDispatch } from "react-redux";
import BuyProcedureCard from "../components/BuyProcedureCard";
import { useNavigate } from "react-router-dom";
import { createBuyProcedureAndNavigate } from "../store/buyProcedureActions";
import SlButton from "@shoelace-style/shoelace/dist/react/button";
import { Link } from "react-router-dom";

export default function BuyProcedureOverview() {
  const buyProcedures = useSelector(
    (state) => state.buyProcedure.buyProcedures
  );
  const phaseInfos = useSelector((state) => state.phase.phaseInfos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCreateClick() {
    dispatch(createBuyProcedureAndNavigate(navigate));
  }

  const lastWorkedOnText =
    buyProcedures && buyProcedures.length > 0 ? (
      <span>
        {" "}
        en hebt het laatst gewerkt aan{" "}
        <Link
          className="link"
          to={`${buyProcedures[0].id.toString()}/${
            phaseInfos
              ? (phaseInfos[buyProcedures[0].id].currentPhase + 1).toString()
              : "1"
          }`}
        >
          {buyProcedures[0].title}
        </Link>
      </span>
    ) : undefined;

  return (
    <>
      {buyProcedures && (
        <>
          <p>
            Welkom terug Lukas! Je hebt {buyProcedures.length} openstaande
            procedures{lastWorkedOnText}. Selecteer hieronder een procedure om
            verder te gaan, of begin met het specificeren van een{" "}
            <button className="link-button link" onClick={handleCreateClick}>
              nieuwe procedure
            </button>
            .
          </p>
          <div className="buy-procedure-header-wrapper">
            <h2>Inkoopprocedures</h2>
            <SlButton
              variant="primary"
              className="shoelace-button"
              onClick={handleCreateClick}
            >
              Nieuwe procedure
            </SlButton>
          </div>

          <div className="buy-procedure-card-wrapper">
            {buyProcedures &&
              buyProcedures.map((x) => (
                <BuyProcedureCard
                  title={x.title}
                  price={x.price}
                  key={x.id}
                  id={x.id}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
}
