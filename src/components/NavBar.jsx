import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <h1>De Inkoopassistent</h1>
      <div className="navbar">
        <ul className="navlist">
          <li>
            <NavLink to="" end>
              Inkoopprocedures
            </NavLink>
          </li>
          <li>
            <NavLink to="elearning">E-learning</NavLink>
          </li>
          <li>
            <NavLink to="about">Over ons</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
