import { Link } from "react-router-dom";
import "./BuyProcedureCard.css";

export default function BuyProcedureCard({ title, price, id }) {
  return (
    <Link to={id.toString()}>
      <div className="buy-procedure-card">
        <h2>{title ? title : "Nieuwe procedure"}</h2>
        {price > 0 && <p className="detail">Prijs: {price} euro</p>}
      </div>
    </Link>
  );
}
