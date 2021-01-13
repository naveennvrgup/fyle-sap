import React from "react";
import { NavLink } from "react-router-dom";

import {
  Typography,
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  selectInput: {
    padding: theme.spacing(0),
  },
  formControl: {
    minWidth: 200,
  },
  titleText: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  topBar: {
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
}));

export default function Toolbar({ searchText, searchCandidateHandler }) {
  const classes = useStyles();

  return (
    <div className={classes.topBar}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          varient="standard"
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          //   value={age}
          //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Typography varient="h1" className={classes.titleText}>
        Branches
      </Typography>
      <FormControl className={classes.formControl}>
        <TextField
          color="primary"
          id="filled-search"
          label="Search field"
          type="search"
          size="small"
          // variant="outlined"
          value={searchText}
          onChange={(e) => searchCandidateHandler(e.target.value)}
          className={classes.searchField}
        />
      </FormControl>
    </div>
  );
}
