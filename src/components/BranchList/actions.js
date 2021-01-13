export const SEARCH_BRANCHES = "SEARCH_BRANCHES";
export const searchBranches = (branches) => ({
  type: SEARCH_BRANCHES,
  payload: { branches },
});

// export const END_LOADING = "END_LOADING";
// export const endLoading = () => ({
//   type: END_LOADING,
//   payload: {},
// });
