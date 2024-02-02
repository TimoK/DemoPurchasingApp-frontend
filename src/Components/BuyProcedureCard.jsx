import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { euroFormat } from "../format";
import { useMemo } from "react";

function getPhaseOverviewClassName(isCompleted, index) {
  const classNames = ["phase-overview"];
  if (index === 0) classNames.push("first-phase");
  if (isCompleted) classNames.push("completed-phase-overview");
  return classNames.join(" ");
}

export default function BuyProcedureCard({ title, price, id }) {
  const phaseInfos = useSelector((state) => state.phase.phaseInfos);

  var phaseOverview = useMemo(() => {
    if (phaseInfos) {
      const phaseInfo = phaseInfos[id];

      return (
        <div className="phase-overview-wrapper">
          {phaseInfo.phaseEnabled.map((isCompleted, index) => (
            <div
              key={index}
              className={getPhaseOverviewClassName(isCompleted, index)}
            />
          ))}
        </div>
      );
    } else return undefined;
  }, [id, phaseInfos]);

  return (
    <Link
      className="buy-procedure-link"
      to={`${id.toString()}/${
        phaseInfos ? (phaseInfos[id].currentPhase + 1).toString() : "1"
      }`}
    >
      <div className="buy-procedure-card">
        <h3>{title ? title : "Nieuwe procedure"}</h3>
        {price > 0 && (
          <p className="detail">
            Inschatting kosten: {euroFormat.format(price)}
          </p>
        )}
        {phaseOverview}
      </div>
    </Link>
  );
}
