import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPageSize } from "./selector";
import { pageSizeChangeHandler } from "./thunk";

import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
}));

function CitySelector({ pageSizeChangeHandler, pageSize }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-autowidth-label">Pg. Size</InputLabel>
      <Select
        varient="standard"
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={pageSize}
        onChange={(e) => pageSizeChangeHandler(e.target.value)}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
        <MenuItem value={1000}>1000</MenuItem>
      </Select>
    </FormControl>
  );
}
const mapStateToProps = (state) => ({
  pageSize: getPageSize(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ pageSizeChangeHandler }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CitySelector);
