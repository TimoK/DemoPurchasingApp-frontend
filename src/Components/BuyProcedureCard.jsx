import { Link } from "react-router-dom";
import "./BuyProcedureCard.css";

export default function BuyProcedureCard({ title, maxPrice, id }) {
  return (
    <Link to={id.toString()}>
      <div className="buy-procedure-card">
        <h2>{title ? title : "Nieuwe procedure"}</h2>
        <p className="detail">Max prijs: {maxPrice} euro</p>
      </div>
    </Link>
  );
}
