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

export const CITY_CHANGE = "CITY_CHANGE";
export const cityChange = (city) => ({
  type: CITY_CHANGE,
  payload: { city },
});
