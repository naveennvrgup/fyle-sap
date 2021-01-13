import * as React from "react";
import { connect } from "react-redux";
import { getBranches, getPageSize, getCount, getPgno } from "./selector";
import { getIsLoading } from "../Navbar/selector";
import { getFavBranches } from "../Favorites/selector";
import { bindActionCreators } from "redux";
import { onPageChangeHandler } from "./thunk";

import {
  makeFavouriteHandler,
  removeFavouriteHandler,
} from "../Favorites/thunk";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { DataGrid } from "@material-ui/data-grid";
import { IconButton } from "@material-ui/core";

function Table({
  branches,
  pageSize,
  pgno,
  isLoading,
  count,
  onPageChangeHandler,
  makeFavouriteHandler,
  removeFavouriteHandler,
  favBranches,
}) {
  const columns = [
    {
      field: "",
      headerName: "fav",
      width: 100,
      sortable: false,
      renderCell: ({ row }) => {
        const { ifsc } = row;
        const isFav = -1 !== favBranches.findIndex((fb) => fb.ifsc === ifsc);

        if (isFav) {
          return (
            <IconButton onClick={() => console.log("remove")}>
              <FavoriteIcon />
            </IconButton>
          );
        }

        return (
          <IconButton onClick={() => makeFavouriteHandler(row)}>
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
  favBranches: getFavBranches(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { onPageChangeHandler, makeFavouriteHandler, removeFavouriteHandler },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Table);
