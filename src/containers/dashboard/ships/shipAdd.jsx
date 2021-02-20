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
    <React.Fragment>
      <ShipForm onSubmit={handleSubmit} error={errorMessage} />
    </React.Fragment>
  );
};

export default ShipAdd;
