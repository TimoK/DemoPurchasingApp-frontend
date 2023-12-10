import "./App.css";
import BuyProcedureCard from "./Components/BuyProcedureCard";
import { useState, useEffect, useRef } from "react";
import CreateBuyProcedureModal from "./Components/CreateBuyProcedureModal";

function App() {
  const [buyProcedures, setBuyProcedures] = useState([]);
  const [refreshBuyProceduresCount, setRefreshBuyProceduresCount] = useState(0);

  const modal = useRef();

  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";
    const url = isDev
      ? "https://localhost:7244/buyprocedures"
      : "https://demopurchasingappbackend20231208091324.azurewebsites.net/buyprocedures";

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setBuyProcedures(resData);
      });
  }, [refreshBuyProceduresCount]);

  function handleCreateClick() {
    modal.current.open();
  }

  function refreshBuyProcedures() {
    setRefreshBuyProceduresCount((x) => x + 1);
  }

  return (
    <div className="main-div">
      <header>
        <h1>Snakelbaars B.V.</h1>
      </header>
      <CreateBuyProcedureModal onCreate={refreshBuyProcedures} ref={modal} />
      <p>
        Welkom terug! <button onClick={handleCreateClick}>Klik hier</button> om
        een nieuwe inkoopprocedure te starten of ga verder met je bestaande
        procedures.
      </p>
      <div>
        {buyProcedures.map((x) => (
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
