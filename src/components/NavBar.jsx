import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <h1>Snakelbaars B.V.</h1>
      <div className="navbar">
        <nav>
          <ul className="list">
            <li>
              <NavLink to="" end>
                Inkoopprocedures
              </NavLink>
            </li>
            <li>
              <NavLink to="about">Over ons</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
