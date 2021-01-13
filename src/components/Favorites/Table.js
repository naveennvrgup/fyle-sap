import * as React from "react";
import { connect } from "react-redux";
import { getBranches, getPageSize, getCount, getPgno } from "./selector";
import { getIsLoading } from "../Navbar/selector";
import { bindActionCreators } from "redux";
import { onPageChangeHandler } from "./thunk";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { DataGrid } from "@material-ui/data-grid";
import { render } from "@testing-library/react";
import { IconButton } from "@material-ui/core";

const columns = [
  {
    field: "",
    headerName: "fav",
    width: 100,
    sortable: false,
    renderCell: ({ row }) => {
      const { ifsc } = row;

      return (
        <IconButton onClick={() => console.log(ifsc)}>
          <FavoriteBorderIcon />
        </IconButton>
      );
    },
  },
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

function Table({
  branches,
  pageSize,
  pgno,
  isLoading,
  count,
  onPageChangeHandler,
}) {
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid
        page={pgno}
        rows={branches}
        columns={columns}
        pageSize={pageSize}
        rowCount={count}
        paginationMode="server"
        onPageChange={({ paginationMode, page }) => {
          if (paginationMode === "server") {
            onPageChangeHandler(page);
          }
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
  pgno: getPgno(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ onPageChangeHandler }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Table);
