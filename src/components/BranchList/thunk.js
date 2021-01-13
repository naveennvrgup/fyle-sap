import { setLoading, endLoading } from "../Navbar/actions";
import {
  searchBranches,
  localFilter,
  cityChange,
  pageSizeChange,
} from "./actions";
import { getPageSize, getOffset, getSearchText, getCity } from "./selector";

export const searchService = (q, offset, pageSize) => async (dispatch) => {
  dispatch(setLoading());

  let response = await fetch(
    `https://fyle-server.herokuapp.com/api/branches?q=${q}&offset=${offset}&limit=${pageSize}`
  );
  let data = await response.json();
  let branches = data["branches"];
  let count = data["count"];

  branches = branches.map((branch, id) => ({ id, ...branch }));

  dispatch(searchBranches(branches, count));
  dispatch(endLoading());
};

export const fetchBranches = () => async (dispatch) => {
  dispatch(searchService("", "", ""));
};

export const localFilterHandler = (searchText) => async (dispatch) => {
  dispatch(localFilter(searchText));
};

export const cityChangeHandler = (city) => async (dispatch, getState) => {
  const state = getState();
  const pageSize = getPageSize(state);

  dispatch(cityChange(city));
  dispatch(searchService(city, 0, pageSize));
};

export const pageSizeChangeHandler = (pageSize) => async (
  dispatch,
  getState
) => {
  const state = getState();
  const city = getCity(state);

  dispatch(pageSizeChange(pageSize));
  dispatch(searchService(city, 0, pageSize));
};
