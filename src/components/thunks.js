// import {
//   fetchCandidatesSuccess,
//   fetchCandidatesLoading,
//   fetchCandidatesFailure,
//   acceptCandidate,
//   rejectCandidate,
//   searchCandidate,
// } from "./actions";
// import { NOT_REVIEWED } from "./candidateStatus";
// import { history } from "../App";

// export const fetchCandidatesHandler = () => async (dispatch) => {
//   console.log("fetch candidates for the first time");

//   try {
//     dispatch(fetchCandidatesLoading());

//     const response = await fetch(
//       "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
//     );
//     let candidates = await response.json();

//     candidates = candidates.map((candidate) => ({
//       ...candidate,
//       status: NOT_REVIEWED,
//     }));

//     dispatch(fetchCandidatesSuccess(candidates));
//   } catch (e) {
//     dispatch(fetchCandidatesFailure());
//     displayAlert(e);
//   }
// };

// export const acceptCandidateHandler = (id) => async (dispatch) => {
//   dispatch(acceptCandidate(id));
//   history.push("/");
// };

// export const rejectCandidateHandler = (id) => async (dispatch) => {
//   dispatch(rejectCandidate(id));
//   history.push("/");
// };

// export const searchCandidateHandler = (name) => async (dispatch) => {
//   dispatch(searchCandidate(name));
//   history.push("/");
// };

// export const displayAlert = (text) => () => {
//   alert(text);
// };
