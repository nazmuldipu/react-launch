import React, { useState } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ tableName, columns, data }) => {
  return (
    <table className="table table-sm border">
      <TableHeader columns={columns} tableName={tableName} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
