import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cityChangeHandler } from "./thunk";
import { getCity } from "./selector";

import {
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: theme.spacing(25),
  },
}));

function CitySelector({ cityChangeHandler, city }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-autowidth-label">City</InputLabel>
      <Select
        varient="standard"
        value={city}
        onChange={(e) => cityChangeHandler(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Banglore"> Banglore</MenuItem>
        <MenuItem value="Chennai"> Chennai</MenuItem>
        <MenuItem value="Kolkata"> Kolkata</MenuItem>
        <MenuItem value="Rajakhera"> Rajakhera</MenuItem>
        <MenuItem value="Chickjajur"> Chickjajur</MenuItem>
        <MenuItem value="Narikkuni"> Narikkuni</MenuItem>
        <MenuItem value="Alagapuri"> Alagapuri</MenuItem>
        <MenuItem value="Tamenglong"> Tamenglong</MenuItem>
        <MenuItem value="Lalpania"> Lalpania</MenuItem>
      </Select>
    </FormControl>
  );
}
const mapStateToProps = (state) => ({
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ cityChangeHandler }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CitySelector);
