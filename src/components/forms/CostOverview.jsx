import { euroFormat } from "../../format";

export default function CostOverview({ price, costEnumerationType }) {
  const BTW_RATE = 0.21;
  const EUROPEAN_TENDER_THRESHOLD = 5283000;

  const isQuarterly = costEnumerationType === 2;
  const isOneTime = costEnumerationType === 3;

  const totalPriceExcl = isQuarterly ? price * 4 : price;
  const totalPriceBtw = totalPriceExcl * BTW_RATE;
  const totalPriceIncl = +totalPriceExcl + totalPriceBtw;

  return (
    <>
      <fieldset>
        <legend>Inschatting kosten</legend>
        <table>
          <tbody>
            {isQuarterly && (
              <tr>
                <td>Kosten per termijn:</td>
                <td>{euroFormat.format(price)}</td>
              </tr>
            )}
            <tr>
              <td>Totale kosten{!isOneTime && " per jaar"}:</td>
              <td>{euroFormat.format(totalPriceExcl)}</td>
            </tr>
            <tr>
              <td>Btw-tarief ({BTW_RATE * 100}%):</td>
              <td>{euroFormat.format(totalPriceBtw)}</td>
            </tr>
            <tr>
              <td>Totaal inclusief Btw:</td>
              <td>{euroFormat.format(totalPriceIncl)}</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      {totalPriceExcl > EUROPEAN_TENDER_THRESHOLD && (
        <fieldset>
          <legend>Aanbestedingsgrens</legend>
          <p>
            Vanaf {euroFormat.format(EUROPEAN_TENDER_THRESHOLD)} (exclusief btw)
            is het wettelijk verplicht een Europese aanbesteding te doen. Kijk
            voor meer informatie bij{" "}
            <a href="https://www.rijksoverheid.nl/onderwerpen/aanbesteden/aanbesteden-internationaal">
              de Rijksoverheid
            </a>
            .
          </p>
        </fieldset>
      )}
    </>
  );
}
