import React, { useState } from "react";
import ShipForm from "../../../forms/shipForm";

const ShipAdd = () => {
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    console.log(event);
    // const path = location.state ? location.state.from.pathname : "/dashboard";
    // try {
    //   setErrorMessage("");
    //   setLoading(true);
    //   await auth.login(event.username, event.password);
    //   setLoading(false);
    //   history.push(path);
    // } catch (ex) {
    //   setLoading(false);
    //   const { data } = ex.response;

    //   if (ex.response && ex.response.status === 400) {
    //     setErrorMessage(data.error_description);
    //   }
    // }
  }

  return (
    <div className="container">
      <h3 className="text-center">Ship Form</h3>
      <ShipForm onSubmit={handleSubmit} error={errorMessage} />
    </div>
  );
};

export default ShipAdd;
