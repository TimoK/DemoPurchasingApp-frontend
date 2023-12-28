import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainWrapper() {
  return (
    <div className="main-div">
      <NavBar />
      <Outlet />
    </div>
  );
}
