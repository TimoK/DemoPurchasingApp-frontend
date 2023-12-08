import "./App.css";
import BuyProcedureCard from "./Components/BuyProcedureCard";
import { useState, useEffect } from "react";

function App() {
  const [buyProcedures, setBuyProcedures] = useState([]);
  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";
    const url = isDev
      ? "https://localhost:7244/buyprocedures"
      : "https://demopurchasingappbackend20231208091324.azurewebsites.net/buyprocedures";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setBuyProcedures(resData);
      });
  }, []);

  return (
    <div className="main-div">
      <header>
        <h1>Snakelbaars B.V.</h1>
      </header>
      <p>
        Welkom terug! Klik hier om een nieuwe inkoopprocedure te starten of ga
        verder met je bestaande procedures.
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
