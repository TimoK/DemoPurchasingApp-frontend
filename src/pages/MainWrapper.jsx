import { useDispatch } from "react-redux";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { fetchBuyProcedures } from "../store/buyProcedureActions";
import { useEffect } from "react";
import "../App.css";

export default function MainWrapper() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBuyProcedures());
  }, [dispatch]);

  return (
    <div className="main-div">
      <NavBar />
      <Outlet />
    </div>
  );
}
