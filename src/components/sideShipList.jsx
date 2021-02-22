import React, { useState, useEffect } from "react";
import shipIcon from "../assets/images/ship.svg";
import { getAllShip } from "../services/shipService";

const SideShipList = ({ ship, shipClick }) => {
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
    <div className="list-group">
      <li href="#" className="list-group-item">
        <small className="text-danger">{errorMessage}</small>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Ship List</h5>
        </div>
        <small>
          Choose a ship from below list
        </small>
      </li>

      {ships.content
        ? ships.content.map((sh) => {
            return (
              <a
                key={sh.id}
                className={
                  "clickable list-group-item list-group-item-action py-1 " +
                  (ship && ship.id === sh.id ? "list-group-item-primary" : "")
                }
                onClick={() => shipClick(sh)}
              >
                <div className="d-flex flex-row">
                  <img className="ship-icon" src={shipIcon} alt="Logo" />
                  {sh.shipNumber}-{sh.name}
                </div>
              </a>
            );
          })
        : ""}
    </div>
  );
};

export default SideShipList;
