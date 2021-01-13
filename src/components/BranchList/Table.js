import * as React from "react";
import { connect } from "react-redux";
import { getBranches } from "./selector";

import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "ifsc", headerName: "IFSC code", width: 150 },
  {
    field: "bank_id",
    headerName: "Bank ID",
    type: "number",
    width: 120,
  },
  { field: "branch", headerName: "Branch", width: 200 },
  { field: "address", headerName: "Address", width: 400 },
  {
    field: "city",
    headerName: "City",
    type: "number",
    width: 200,
  },
  {
    field: "district",
    headerName: "District",
    type: "number",
    width: 200,
  },
  {
    field: "state",
    headerName: "State",
    type: "number",
    width: 200,
  },
];

function Table({ branches }) {
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={branches}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}

{
  /* <DataGrid
  rows={rows}
  columns={data.columns}
  pagination
  pageSize={5}
  rowCount={100}
  paginationMode="server"
  onPageChange={handlePageChange}
  loading={loading}
/> */
}

const mapStateToProps = (state) => ({
  branches: getBranches(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
