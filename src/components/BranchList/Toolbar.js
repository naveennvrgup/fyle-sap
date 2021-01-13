import React from "react";

import SearchInput from "./SearchInput";
import CitySelector from "./CitySelector";
import PageSizeSelector from "./PageSizeSelector";

import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleText: {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    flexGrow: "1",
  },
  topBar: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: theme.spacing(5),
  },
}));

export default function Toolbar() {
  const classes = useStyles();

  return (
    <div className={classes.topBar}>
      <CitySelector />
      <PageSizeSelector />
      <Typography varient="h1" className={classes.titleText}>
        Branches
      </Typography>
      <SearchInput />
    </div>
  );
}
