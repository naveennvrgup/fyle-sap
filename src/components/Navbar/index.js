import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLoading } from "./selector";

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  LinearProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    marginLeft: theme.spacing(2),
  },
}));

export const Navbar = ({ isLoading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Fyle SAP
          </Typography>
          <Button
            exact
            activeClassName="MuiButton-containedSecondary"
            className={classes.navLink}
            component={NavLink}
            to="/"
            color="inherit"
          >
            Branches
          </Button>
          <Button
            exact
            activeClassName="MuiButton-containedSecondary"
            className={classes.navLink}
            component={NavLink}
            to="/favorities"
            color="inherit"
          >
            Favorites
          </Button>
        </Toolbar>
        {isLoading ? <LinearProgress color="secondary" /> : null}
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
