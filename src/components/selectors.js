// import { createSelector } from "reselect";
// import { ACCEPTED, REJECTED } from "./candidateStatus";

// export const getIsLoading = (state) => state.candidatesReducer.isLoading;
// export const getSearchText = (state) => state.candidatesReducer.searchText;

// export const getCandidates = (state) => {
//   const { searchText } = state.candidatesReducer;
//   const { candidates } = state.candidatesReducer;

//   if (searchText.length === 0) {
//     return candidates;
//   } else {
//     return candidates.filter(
//       (candidate) =>
//         candidate.name.toLowerCase().indexOf(searchText) !== -1 ||
//         candidate.id.indexOf(searchText) !== -1
//     );
//   }
// };

// export const getAllCandidates = createSelector(
//   getCandidates,
//   (candidates) => candidates
// );

// export const getAcceptedCandidates = createSelector(
//   getCandidates,
//   (candidates) =>
//     candidates.filter((candidate) => (candidates.status === ACCEPTED))
// );

// export const getRejectedCandidates = createSelector(
//   getCandidates,
//   (candidates) =>
//     candidates.filter((candidate) => (candidates.status === REJECTED))
// );
