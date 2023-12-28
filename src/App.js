import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import BuyProcedureCard from "./components/BuyProcedureCard";
import { useState, useEffect, useRef } from "react";
import CreateBuyProcedureModal from "./components/CreateBuyProcedureModal";
import { fetchBuyProcedures } from "./store/buyProcedureActions";

function App() {
  const dispatch = useDispatch();
  const modal = useRef();
  const buyProcedures = useSelector(
    (state) => state.buyProcedure.buyProcedures
  );

  useEffect(() => {
    dispatch(fetchBuyProcedures());
  }, []);

  function handleCreateClick() {
    modal.current.open();
  }

  return (
    <div className="main-div">
      <header>
        <h1>Snakelbaars B.V.</h1>
      </header>
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
            />
          ))}
      </div>
    </div>
  );
}

export default App;
