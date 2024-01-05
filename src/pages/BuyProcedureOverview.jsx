import { useSelector, useDispatch } from "react-redux";
import BuyProcedureCard from "../components/BuyProcedureCard";
import { useNavigate } from "react-router-dom";
import { createBuyProcedureAndNavigate } from "../store/buyProcedureActions";

export default function BuyProcedureOverview() {
  const buyProcedures = useSelector(
    (state) => state.buyProcedure.buyProcedures
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCreateClick() {
    dispatch(createBuyProcedureAndNavigate(navigate));
  }

  return (
    <>
      <p>
        Welkom terug! <button onClick={handleCreateClick}>Klik hier</button> om
        een nieuwe inkoopprocedure te starten of ga verder met je bestaande
        procedures.
      </p>
      <div>
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
  );
}
