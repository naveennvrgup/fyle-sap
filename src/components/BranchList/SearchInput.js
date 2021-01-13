import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { makeStyles, TextField, FormControl } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: theme.spacing(25)
  },
}));

function SearchInput({ searchText, searchBranchHandler }) {
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
        onChange={(e) => searchBranchHandler(e.target.value)}
      />
    </FormControl>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
