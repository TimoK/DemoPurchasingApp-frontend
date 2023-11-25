import "./App.css";
import BuyProcedureCard from "./Components/BuyProcedureCard";
import buyProcedures from "./BuyProcedures.json";

function App() {
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
          <BuyProcedureCard title={x.title} maxPrice={x.maxPrice} />
        ))}
      </div>
    </div>
  );
}

export default App;
