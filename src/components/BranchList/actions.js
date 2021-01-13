export const SEARCH_BRANCHES = "SEARCH_BRANCHES";
export const searchBranches = (branches) => ({
  type: SEARCH_BRANCHES,
  payload: { branches },
});

export const LOCAL_FILTER = "LOCAL_FILTER";
export const localFilter = (searchText) => ({
  type: LOCAL_FILTER,
  payload: { searchText },
});
