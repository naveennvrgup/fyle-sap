import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getFavBranches } from "../Favorites/selector";
import { bindActionCreators } from "redux";
import {
  makeFavouriteHandler,
  removeFavouriteHandler,
} from "../BranchList/thunk";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";

// import { makeStyles } from "@material-ui/core/styles";

import {
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Table,
} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({}));

function BasicTable({
  makeFavouriteHandler,
  removeFavouriteHandler,
  favBranches,
}) {
  // const classes = useStyles();

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
            {favBranches.map((branch) => (
              <TableRow key={branch["ifsc"]}>
                <TableCell align="center">
                  <IconButton
                    onClick={() => removeFavouriteHandler(branch["ifsc"])}
                  >
                    <FavoriteIcon color='secondary' />
                  </IconButton>
                </TableCell>
                <TableCell>{branch["ifsc"]}</TableCell>
                <TableCell>{branch["bank_id"]}</TableCell>
                <TableCell>
                  <Link to={`/banks/${branch["ifsc"]}`}>
                    {branch["branch"]}
                  </Link>
                </TableCell>
                <TableCell>{branch["address"]}</TableCell>
                <TableCell>{branch["city"]}</TableCell>
                <TableCell>{branch["district"]}</TableCell>
                <TableCell>{branch["state"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const mapStateToProps = (state) => ({
  favBranches: getFavBranches(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { makeFavouriteHandler, removeFavouriteHandler },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BasicTable);
