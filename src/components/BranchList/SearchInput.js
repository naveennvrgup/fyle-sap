import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { localFilterHandler } from "./thunk";
import { getSearchText } from "./selector";

import { makeStyles, TextField, FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: theme.spacing(25),
  },
}));

function SearchInput({ searchText, localFilterHandler }) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <TextField
        color="primary"
        id="filled-search"
        label="Search field"
        type="search"
        size="small"
        // variant="outlined"
        value={searchText}
        onChange={(e) => localFilterHandler(e.target.value)}
      />
    </FormControl>
  );
}

const mapStateToProps = (state) => ({
  searchText: getSearchText(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ localFilterHandler }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
