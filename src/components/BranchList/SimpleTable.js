import * as React from "react";
import { connect } from "react-redux";
import { getBranches, getPageSize, getCount, getPgno } from "./selector";
import { getIsLoading } from "../Navbar/selector";
import { getFavBranches } from "../Favorites/selector";
import { bindActionCreators } from "redux";
import {
  onPageChangeHandler,
  makeFavouriteHandler,
  removeFavouriteHandler,
} from "./thunk";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import {
  Box,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Table,
} from "@material-ui/core";

import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paginationWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
  },
}));

function BasicTable({
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
  const classes = useStyles();

  return (
    <>
      <TableContainer elevation="0">
        <Table aria-label="branches table">
          <TableHead>
            <TableRow>
              <TableCell>Favourite</TableCell>
              <TableCell>IFSC</TableCell>
              <TableCell>Bank ID</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>District</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branches.map((branch) => (
              <TableRow key={branch["ifsc"]}>
                <TableCell align="center">
                  {branch["isFav"] ? (
                    <IconButton
                      onClick={() => removeFavouriteHandler(branch["ifsc"])}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => makeFavouriteHandler(branch)}>
                      <FavoriteBorderIcon />
                    </IconButton>
                  )}
                </TableCell>
                <TableCell>{branch["ifsc"]}</TableCell>
                <TableCell>{branch["bank_id"]}</TableCell>
                <TableCell>{branch["branch"]}</TableCell>
                <TableCell>{branch["address"]}</TableCell>
                <TableCell>{branch["city"]}</TableCell>
                <TableCell>{branch["district"]}</TableCell>
                <TableCell>{branch["state"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.paginationWrapper}>
        <Pagination
          page={pgno}
          onChange={(params, newPgno) => {
            onPageChangeHandler(newPgno);
          }}
          color="secondary"
          count={Math.round(count / pageSize)}
        />
      </Box>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(BasicTable);
