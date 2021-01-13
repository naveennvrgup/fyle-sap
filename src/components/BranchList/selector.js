import { createSelector } from "reselect";
import { getFavBranches } from "../Favorites/selector";

export const extractBranches = (state) => state.branchList.branches;

export const getSearchText = (state) => state.branchList.searchText;
export const getCity = (state) => state.branchList.city;
export const getPageSize = (state) => state.branchList.pageSize;
export const getCount = (state) => state.branchList.count;
export const getPgno = (state) => state.branchList.pgno;

export const getBranches = createSelector(
  extractBranches,
  getSearchText,
  getFavBranches,
  (branches, searchText, favBranches) => {
    searchText = searchText.toLowerCase();

    const filteredBranches = branches.filter((branch) => {
      let flag = false;
      flag |= branch["ifsc"].toLowerCase().includes(searchText);
      flag |= branch["branch"].toLowerCase().includes(searchText);
      flag |= branch["address"].toLowerCase().includes(searchText);
      flag |= branch["city"].toLowerCase().includes(searchText);
      flag |= branch["district"].toLowerCase().includes(searchText);
      flag |= branch["state"].toLowerCase().includes(searchText);
      flag |= String(branch["bank_id"]).includes(searchText);

      return flag;
    });

    return filteredBranches;
  }
);
