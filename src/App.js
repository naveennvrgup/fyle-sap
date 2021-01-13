import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Switch, Route } from "react-router-dom";

import BranchList from "./components/BranchList";
import BranchDetail from "./components/BranchDetail";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";

import "./App.css";
import { Paper, Container, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";

export const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F5F5F5",
    minHeight: '100vh', 
    paddingTop: theme.spacing(13),
  },
  paper: {
    padding: theme.spacing(5),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Navbar />
          <Container maxWidth="md">
            <Paper elevation={2} className={classes.paper}>
              <Switch>
                <Route component={Favorites} path="/favorities" />
                <Route component={BranchDetail} path="/banks/:branchId" />
                <Route component={BranchList} path="/" />
              </Switch>
            </Paper>
          </Container>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
