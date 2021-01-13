import { setLoading, endLoading } from "../Navbar/actions";
import {
  searchBranches,
  localFilter,
  cityChange,
  pageSizeChange,
  pgnoChange,
} from "./actions";
import { getPageSize, getCity, getPgno } from "./selector";
import { getIsLoading } from "../Navbar/selector";

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

export const pgnoChangeHandler = (pgno) => async (dispatch) => {
  dispatch(pgnoChange(pgno));
};

export const cityChangeHandler = (city) => async (dispatch, getState) => {
  const state = getState();
  const pageSize = getPageSize(state);

  dispatch(cityChange(city));
  dispatch(searchService(city, 0, pageSize));
};

export const onPageChangeHandler = (pgno) => async (dispatch, getState) => {
  const state = getState();
  const pageSize = getPageSize(state);
  const city = getCity(state);
  const currPgno = getPgno(state);
  const isLoading = getIsLoading(state);

  if (currPgno === pgno || isLoading) return;

  dispatch(pgnoChangeHandler(pgno));
  dispatch(searchService(city, (pgno - 1) * pageSize, pageSize));
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
