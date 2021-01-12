export const FETCH_CANDIDATES_SUCCESS = "FETCH_CANDIDATES_SUCCESS";
export const fetchCandidatesSuccess = (candidates) => ({
  type: FETCH_CANDIDATES_SUCCESS,
  payload: { candidates },
});

