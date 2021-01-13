export const FETCH_BRANCH = "FETCH_BRANCH";
export const fetchBranch = (branch) => ({
  type: FETCH_BRANCH,
  payload: { branch },
});

export const SET_API_CACHE = "SET_API_CACHE";
export const setApiCache = (uri, data) => ({
  type: SET_API_CACHE,
  payload: { uri, data },
});

export const TOGGLE_FAV = "TOGGLE_FAV";
export const toggleFav = () => ({
  type: TOGGLE_FAV,
  payload: {},
});
