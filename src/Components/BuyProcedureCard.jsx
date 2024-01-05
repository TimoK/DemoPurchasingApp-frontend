import { Link } from "react-router-dom";
import "./BuyProcedureCard.css";
import { euroFormat } from "../format";

export default function BuyProcedureCard({ title, price, id }) {
  return (
    <Link to={id.toString()}>
      <div className="buy-procedure-card">
        <h2>{title ? title : "Nieuwe procedure"}</h2>
        {price > 0 && <p className="detail">Inschatting kosten: {euroFormat.format(price)}</p>}
      </div>
    </Link>
  );
}
