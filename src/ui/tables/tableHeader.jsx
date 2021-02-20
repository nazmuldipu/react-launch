import React, { useState } from "react";

const TableHeader = ({ tableName, columns }) => {
  return (
    <thead>
      <tr>
        <th colSpan={columns.length} className="table-name">{tableName}</th>
      </tr>
      <tr>
        {columns.map((column) => (
          <th className="clickable" key={column.path || column.key}>
            {column.lable}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
