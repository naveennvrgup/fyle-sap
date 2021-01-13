import { createSelector } from "reselect";

export const getBranch = (state) => state.branchDetail.branch;
export const getApiCache = (state) => state.branchDetail.apiCache;

export const getIsFav = createSelector(getBranch, (branch) => branch["isFav"]);
export const getIfsc = createSelector(getBranch, (branch) => branch["ifsc"]);
