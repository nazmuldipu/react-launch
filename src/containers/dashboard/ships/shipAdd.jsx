import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ShipForm from "../../../forms/shipForm";
import { saveShip } from "../../../services/shipService";

const ShipAdd = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    console.log("Event", event);
    // const path = location.state ? location.state.from.pathname : "/dashboard";
    try {
      setErrorMessage("");
      setLoading(true);
      await saveShip(event);
      //   await auth.login(event.username, event.password);
      setLoading(false);
      history.push("/dashboard/ships");
    } catch (ex) {
      //   setLoading(false);
      //   const { data } = ex.response;

      if (ex.response && ex.response.status === 400) {
        setErrorMessage(ex.response.error_description);
      } else {
        setErrorMessage(
          ex.response.status + ": " + ex.response.error_description
        );
      }
    }
  }

  return (
    <div className="container">
      <h3 className="text-center">Ship Form</h3>
      <ShipForm onSubmit={handleSubmit} error={errorMessage} />
    </div>
  );
};

export default ShipAdd;
