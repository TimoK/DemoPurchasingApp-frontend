import { useSelector } from "react-redux";
import BuyProcedureCard from "../components/BuyProcedureCard";
import { useRef } from "react";
import CreateBuyProcedureModal from "../components/CreateBuyProcedureModal";

export default function BuyProcedureOverview() {
  const modal = useRef();
  const buyProcedures = useSelector(
    (state) => state.buyProcedure.buyProcedures
  );

  function handleCreateClick() {
    modal.current.open();
  }

  return (
    <>
      <CreateBuyProcedureModal ref={modal} />
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
              maxPrice={x.maxPrice}
              key={x.title}
              id={x.id}
            />
          ))}
      </div>
    </>
  );
}
