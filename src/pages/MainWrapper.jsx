import SlButton from "@shoelace-style/shoelace/dist/react/button";
import SlRadio from "@shoelace-style/shoelace/dist/react/radio";
import SlRadioGroup from "@shoelace-style/shoelace/dist/react/radio-group";
import SlInput from "@shoelace-style/shoelace/dist/react/input";

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
      <div className="testshoelace">
        <SlButton variant="primary" className="shoelace-button">
          Nieuwe procedure
        </SlButton>

        <SlRadioGroup
          label="Binnen welke termijn worden de kosten gemaakt?"
          name="a"
          value="1"
        >
          <SlRadio value="1">Jaarlijks</SlRadio>
          <SlRadio value="2">Per kwartaal</SlRadio>
          <SlRadio value="3">Eenmalig</SlRadio>
        </SlRadioGroup>
        <SlButton variant="danger" className="shoelace-button" outline>
          Verwijder procedure
        </SlButton>

        <SlInput className="sl-input" label="Wat wil je inkopen?" />
      </div>

      <Outlet />
    </div>
  );
}
