import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getBranch } from "./selector";
import { fetchBranchHandler, toggleFavHandler } from "./thunk";

import { makeStyles, Typography, Grid, IconButton } from "@material-ui/core";
import {
  Favorite,
  FavoriteBorder,
  KeyboardBackspace,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  titleText: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    flexGrow: "1",
    marginBottom: theme.spacing(6),
  },
  boldText: {
    fontWeight: "bold",
  },
  padRight: {
    paddingRight: theme.spacing(3),
  },
}));

export const BranchDetail = ({
  fetchBranchHandler,
  toggleFavHandler,
  branch,
  match,
  history,
}) => {
  const classes = useStyles();
  const ifsc = match.params.branchId;

  // eslint-disable-next-line
  useEffect(() => fetchBranchHandler(ifsc), []);

  return (
    <div>
      <Grid container justify="space-between" alignItems="baseline">
        <IconButton onClick={history.goBack}>
          <KeyboardBackspace />
        </IconButton>
        <Typography
          variant="h3"
          className={classes.titleText}
          component="h1"
          align="center"
        >
          Branch Details
        </Typography>
        <IconButton onClick={toggleFavHandler}>
          {branch["isFav"] ? <Favorite color='secondary' /> : <FavoriteBorder />}
        </IconButton>
      </Grid>
      <Grid container>
        <Grid item className={classes.padRight} xs={4}>
          <Typography className={classes.boldText} align="right">
            IFSC Code:
          </Typography>
          <Typography className={classes.boldText} align="right">
            Branch:
          </Typography>
          <Typography className={classes.boldText} align="right">
            City:
          </Typography>
          <Typography className={classes.boldText} align="right">
            District:
          </Typography>
          <Typography className={classes.boldText} align="right">
            State:
          </Typography>
          <Typography className={classes.boldText} align="right">
            bank_id:
          </Typography>
          <Typography className={classes.boldText} align="right">
            Address:
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>{branch["ifsc"]}</Typography>
          <Typography>{branch["branch"]}</Typography>
          <Typography>{branch["city"]}</Typography>
          <Typography>{branch["district"]}</Typography>
          <Typography>{branch["state"]}</Typography>
          <Typography>{branch["bank_id"]}</Typography>
          <Typography>{branch["address"]}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  branch: getBranch(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchBranchHandler, toggleFavHandler }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BranchDetail);
