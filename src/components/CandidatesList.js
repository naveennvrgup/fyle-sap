// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchCandidatesHandler, searchCandidateHandler } from "./thunks";
// import { Switch, Route } from "react-router-dom";
// import {
//   getAllCandidates,
//   getAcceptedCandidates,
//   getRejectedCandidates,
//   getIsLoading,
//   getSearchText,
// } from "./selectors";

// import Candidates from "./Candidates";
// import Toolbar from "./Toolbar";
// import Spinner from "./Spinner";

// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   wrapper: {
//     minHeight: "inherit",
//     display: "flex",
//     flexDirection: "column",
//   },
// }));

// export const CandidatesList = ({
//   allCandidates,
//   acceptedCandidates,
//   rejectedCandidates,
//   isLoading,
//   searchText,
//   fetchCandidatesHandler,
//   searchCandidateHandler,
// }) => {
//   const classes = useStyles();

//   useEffect(() => {
//     if (allCandidates.length === 0) fetchCandidatesHandler();
//   }, []);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   return (
//     <div className={classes.wrapper}>
//       <Toolbar {...{ searchText, searchCandidateHandler }} />

//       <Switch>
//         <Route
//           path="/accepted"
//           component={() => (
//             <Candidates
//               errMsg="No Accepted candidates exists!"
//               candidates={acceptedCandidates}
//             />
//           )}
//         />
//         <Route
//           path="/rejected"
//           component={() => (
//             <Candidates
//               errMsg="No Rejected candidates exists!"
//               candidates={rejectedCandidates}
//             />
//           )}
//         />
//         <Route
//           path="/"
//           component={() => (
//             <Candidates
//               errMsg="No candidates are available!"
//               candidates={allCandidates}
//             />
//           )}
//         />
//       </Switch>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   allCandidates: getAllCandidates(state),
//   acceptedCandidates: getAcceptedCandidates(state),
//   rejectedCandidates: getRejectedCandidates(state),
//   isLoading: getIsLoading(state),
//   searchText: getSearchText(state),
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     { fetchCandidatesHandler, searchCandidateHandler },
//     dispatch
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(CandidatesList);
