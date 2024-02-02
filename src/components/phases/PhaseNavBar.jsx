import { NavLink } from "react-router-dom";

function getPhaseNavBarClassName(
  zeroIndexedPhaseId,
  isCompleted,
  isCurrentPhase,
  isEnabled
) {
  let classes = ["phase-navbar"];
  if (zeroIndexedPhaseId === 0) classes.push("first-phase");
  if (isCompleted) classes.push("completed");
  if (isCurrentPhase) classes.push("active");
  if (!isEnabled) classes.push("disabled");

  return classes.join(" ");
}

export default function PhaseNavBar({ phaseInfo, phaseId: currentPhaseId }) {
  let oneIndexedPhaseId = 0;
  return (
    <div className="phase-navbar-wrapper">
      {phaseInfo &&
        phaseInfo.phaseCompleted.map((isCompleted) => {
          // Note that URLs and names are one-indexed while slide is zero-indexed, so this is not off by one
          oneIndexedPhaseId++;

          const isEnabled = phaseInfo.phaseEnabled[oneIndexedPhaseId - 1];
          return (
            <NavLink
              key={oneIndexedPhaseId}
              to={`../${oneIndexedPhaseId}`}
              className={`phase-nav-link${!isEnabled ? " disabled" : ""}`}
              end
            >
              <div
                className={getPhaseNavBarClassName(
                  oneIndexedPhaseId - 1,
                  isCompleted,
                  oneIndexedPhaseId.toString() === currentPhaseId,
                  isEnabled
                )}
              >
                <p>{isEnabled && oneIndexedPhaseId}</p>
              </div>
            </NavLink>
          );
        })}
    </div>
  );
}
