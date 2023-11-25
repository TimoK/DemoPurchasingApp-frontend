import logo from "./logo.svg";
import "./App.css";
import BuyProcedureCard from "./Components/BuyProcedureCard";

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
        <BuyProcedureCard title="Moersleutels" maxPrice="25000" />
        <BuyProcedureCard title="Bedrijfsauto's" maxPrice={200340} />
      </div>
    </div>
  );
}

export default App;
