import React, { useState } from "react";
import Table from "./table";
import { Link } from "react-router-dom";

const ShipTable = ({ ships }) => {
  const columns = [
    { path: "shipNumber", lable: "Ship No" },
    { path: "name", lable: "Name" },
    { path: "phoneNumber", lable: "Phone" },
    {
      lable: "Status",
      key: "enabled",
      content: (ship) => <span>{ship.enabled ? "Enabled" : "Disabled"}</span>,
    },
    {
      path: "route",
      lable: "Route",
      key: "route",
      content: (ship) => (
        <span>
          {ship.startingPoint} - {ship.droppingPoint}
        </span>
      ),
    },
    {
      key: "like",
      content: (ship) => (
        <React.Fragment>
          <div class="btn-group btn-group-sm" role="group" >
            <Link class="btn btn-outline-info btn-sm" to={"/dashboar/ships/" + ship.id}>Details</Link>
            <Link class="btn btn-outline-info btn-sm" to={"/dashboar/category-add" + ship.id}>Add Category</Link>
            <Link class="btn btn-outline-info btn-sm" to={"/dashboar/seat-add" + ship.id}>Add Seat</Link>
          </div>
        </React.Fragment>
      ),
    },
  ];

  return (
    <Table
      tableName={"Ship Table"}
      columns={columns}
      data={ships.content ? ships.content : []}
    />
  );
};

export default ShipTable;
