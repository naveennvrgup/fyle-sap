import * as React from "react";
import { connect } from "react-redux";
import { getBranches, getPageSize, getCount } from "./selector";
import { getIsLoading } from "../Navbar/selector";

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

function Table({ branches, pageSize, isLoading, count }) {
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={branches}
        columns={columns}
        pageSize={pageSize}
        rowCount={count}
        paginationMode="server"
        onPageChange={(params) => {
          console.log(params);
        }}
        loading={isLoading}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  branches: getBranches(state),
  pageSize: getPageSize(state),
  isLoading: getIsLoading(state),
  count: getCount(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
