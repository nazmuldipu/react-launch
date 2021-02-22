import React from "react";
import Table from "./table";

const ShipMapTable = ({ ship, shipMap, handleToogle }) => {
  const columns = [
    { path: "date", lable: "Date" },
    {
      lable: "Status",
      key: "enabled",
      content: (MAP) => (
        <span>
          {MAP.value ? (
            <i className="fa fa-check"></i>
          ) : (
            <i className="fa fa-times"></i>
          )}
        </span>
      ),
    },
    {
      key: "activate",
      content: (ship) => (
        <a
          className={
            "btn btn-sm " + (ship.value ? "btn-secondary" : "btn-primary")
          }
          onClick={() => handleToogle(ship)}
        >
          {ship.value ? "Stop Ship" : "Run Ship"}
        </a>
      ),
    },
  ];

  return (
    <Table
      tableName={"Ship MAP Table for: " + ship.shipNumber + " " + ship.name}
      columns={columns}
      data={shipMap}
    />
  );
};

export default ShipMapTable;
