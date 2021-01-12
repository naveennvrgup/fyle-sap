import React from "react";
import { makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spinner: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Spinner() {
  const classes = useStyles();
  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
}
