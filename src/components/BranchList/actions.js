export const SEARCH_BRANCHES = "SEARCH_BRANCHES";
export const searchBranches = (branches, count) => ({
  type: SEARCH_BRANCHES,
  payload: { branches, count },
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

export const PAGE_SIZE_CHANGE = "PAGE_SIZE_CHANGE";
export const pageSizeChange = (pageSize) => ({
  type: PAGE_SIZE_CHANGE,
  payload: { pageSize },
});

export const PGNO_CHANGE = "PGNO_CHANGE";
export const pgnoChange = (pgno) => ({
  type: PGNO_CHANGE,
  payload: { pgno },
});
