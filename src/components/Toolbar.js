// import React from "react";
// import { NavLink } from "react-router-dom";

// import {
//   Typography,
//   makeStyles,
//   TextField,
//   Button,
//   ButtonGroup,
// } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   titleText: {
//     textAlign: "center",
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//   },
//   topBar: {
//     marginBottom: theme.spacing(3),
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// }));

// export default function Toolbar({ searchText, searchCandidateHandler }) {
//   const classes = useStyles();

//   return (
//     <div className={classes.topBar}>
//       <ButtonGroup color="primary" aria-label="outlined primary button group">
//         <Button
//           activeClassName="MuiButton-containedPrimary"
//           exact
//           component={NavLink}
//           to="/"
//         >
//           All
//         </Button>
//         <Button
//           activeClassName="MuiButton-containedPrimary"
//           component={NavLink}
//           to="/accepted"
//         >
//           Accepted
//         </Button>
//         <Button
//           activeClassName="MuiButton-containedPrimary"
//           exact
//           component={NavLink}
//           to="/rejected"
//         >
//           Rejected
//         </Button>
//       </ButtonGroup>
//       <Typography varient="h1" className={classes.titleText}>
//         Candidates
//       </Typography>
//       <TextField
//         color="primary"
//         id="filled-search"
//         label="Search field"
//         type="search"
//         size="small"
//         variant="outlined"
//         value={searchText}
//         onChange={(e) => searchCandidateHandler(e.target.value)}
//         className={classes.searchField}
//       />
//     </div>
//   );
// }
