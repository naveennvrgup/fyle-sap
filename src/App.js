import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Paper, Container, makeStyles } from "@material-ui/core";
import './App.css';

export const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F5F5F5",
    padding: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(5),
    minHeight: '90vh'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router history={history}>
        <Container maxWidth="md">
          <Paper elevation={2} className={classes.paper}>
            Some boilerplate code ....
          </Paper>
        </Container>
      </Router>
    </div>
  );
}

export default App;
