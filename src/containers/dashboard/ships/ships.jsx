import React, { useState, useEffect } from "react";
import { getAllShip } from "../../../services/shipService";
import ShipTable from "./../../../ui/tables/shipTable";

const Ships = () => {
  const [ships, setShips] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(async () => {
    let mounted = true;
    getShips();
    return () => (mounted = false);
  }, []);

  async function getShips() {
    try {
      const { data: ships } = await getAllShip();
      setShips(ships);
    } catch (ex) {
      if (ex.response && ex.response.data) {
        setErrorMessage(ex.response.data.error_description);
      }
    }
  }

  return (
    <React.Fragment>
      <div className="container my-2">
        <ShipTable ships={ships} />
      </div>
    </React.Fragment>
  );
};

export default Ships;

{
  /* <MoviesTable
movies={movies}
sortColumn={sortColumn}
onLike={this.handleLike}
onDelete={this.handleDelete}
onSort={this.handleSort}
/> */
}
