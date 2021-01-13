import { createSelector } from "reselect";

export const getSearchText = (state) => state.branchList.searchText;
export const getCity = (state) => state.branchList.city;

export const getBranches = (state) => {
  let { searchText, branches } = state.branchList;
  searchText = searchText.toLowerCase();

  return branches.filter((branch) => {
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
};
