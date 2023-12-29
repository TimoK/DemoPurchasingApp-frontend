import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function BuyProcedurePage() {
  const buyProcedures = useSelector(
    (state) => state.buyProcedure.buyProcedures
  );
  const { id } = useParams();
  const buyProcedure =
    buyProcedures && buyProcedures.filter((x) => x.id.toString() === id)[0];

  return (
    <>
      {buyProcedure && (
        <div className="buy-procedure-card">
          <h1>Dummy detail view</h1>
          <h2>
            {buyProcedure.title ? buyProcedure.title : "Nieuwe procedure"}
          </h2>
          <p className="detail">Max prijs: {buyProcedure.maxPrice} euro</p>
        </div>
      )}
    </>
  );
}
