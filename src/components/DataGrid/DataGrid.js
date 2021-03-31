import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "idNumber", headerName: "ID number", width: 130 },
  { field: "employmentNumber", headerName: "Employment number", width: 220 },
  { field: "surname", headerName: "Surname", width: 200 },
  { field: "otherNames", headerName: "Other names", width: 250 },
  { field: "region", headerName: "Region", width: 250 },
  { field: "department", headerName: "Department", width: 150 },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:5000/api/staff/allstaff");

      setRows(req.data);
    }

    fetchData();
  }, []);
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
}
