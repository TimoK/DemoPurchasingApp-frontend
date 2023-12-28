export default function BuyProcedurePage({ title, maxPrice }) {
  return (
    <div className="buy-procedure-card">
      <h2>{title}</h2>
      <p className="detail">Max prijs: {maxPrice} euro</p>
    </div>
  );
}
