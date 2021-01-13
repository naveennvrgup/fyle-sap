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
    marginBottom: theme.spacing(2),
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5),
  },
  fGrow: {
    flexGrow: "1",
  },
}));

export default function Toolbar() {
  const classes = useStyles();

  return (
    <>
      <Typography varient="h1" className={classes.titleText}>
        Branches
      </Typography>
      <div className={classes.bottomRow}>
        <div>
          <CitySelector />
          <PageSizeSelector />
        </div>
        <SearchInput />
      </div>
    </>
  );
}
