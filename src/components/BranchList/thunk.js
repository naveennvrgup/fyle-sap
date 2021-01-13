import { setLoading, endLoading } from "../Navbar/actions";
import {
  searchBranches,
  localFilter,
  cityChange,
  pageSizeChange,
} from "./actions";
import { getPageSize } from "./selector";

export const searchBranchesHandler = (q, limit, offset) => async (
  dispatch,
  getState
) => {
  dispatch(setLoading());

  const pageSize = getPageSize(getState());

  let response = await fetch(
    `https://fyle-server.herokuapp.com/api/branches?q=${q}&offset=${offset}&limit=${pageSize}`
  );
  let data = await response.json();
  let branches = data["branches"];
  branches = branches.map((branch, id) => ({ id, ...branch }));
  dispatch(searchBranches(branches));

  dispatch(endLoading());
};

export const localFilterHandler = (searchText) => async (dispatch) => {
  dispatch(localFilter(searchText));
};

export const cityChangeHandler = (city) => async (dispatch) => {
  dispatch(cityChange(city));
  dispatch(searchBranchesHandler(city, "", ""));
};

export const pageSizeChangeHandler = (pageSize) => async (dispatch) => {
  dispatch(pageSizeChange(pageSize));
  dispatch(searchBranchesHandler(pageSize, "", ""));
};
