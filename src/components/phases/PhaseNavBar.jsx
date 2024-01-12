import { NavLink } from "react-router-dom";

function getClasses(phaseInfo, zeroIndexedPhaseId, isCompleted) {
  let classes = [];
  if (isCompleted) {
    classes.push("completed");
  }
  if (zeroIndexedPhaseId !== 0 && !phaseInfo.phases[zeroIndexedPhaseId - 1]) {
    classes.push("disabled");
  }
  return classes.join(" ");
}

export default function PhaseNavBar({ phaseInfo }) {
  let oneIndexedPhaseId = 0;

  return (
    <div className="navbar">
      <nav>
        <ul className="list">
          {phaseInfo &&
            phaseInfo.phases.map((isCompleted) => {
              // Note that URLs and names are one-indexed while slide is zero-indexed, so this is not off by one
              oneIndexedPhaseId++;
              console.log(isCompleted);
              return (
                <li key={oneIndexedPhaseId}>
                  <NavLink
                    to={`../${oneIndexedPhaseId}`}
                    className={getClasses(
                      phaseInfo,
                      oneIndexedPhaseId - 1,
                      isCompleted
                    )}
                    end
                  >
                    Fase {oneIndexedPhaseId}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}
