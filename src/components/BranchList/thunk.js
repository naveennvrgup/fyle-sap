import { setLoading, endLoading } from "../Navbar/actions";
import {
  searchBranches,
  localFilter,
  cityChange,
  pageSizeChange,
  pgnoChange,
  toggleFav,
} from "./actions";
import { getPageSize, getCity, getPgno } from "./selector";
import { getIsLoading } from "../Navbar/selector";
import { getFavBranches } from "../Favorites/selector";
import {
  makeFavouriteService,
  removeFavouriteService,
} from "../Favorites/thunk";

export const searchService = (q, offset, pageSize) => async (
  dispatch,
  getState
) => {
  dispatch(setLoading());

  let response = await fetch(
    `https://fyle-server.herokuapp.com/api/branches?q=${q}&offset=${offset}&limit=${pageSize}`
  );
  let data = await response.json();
  let branches = data["branches"];
  let count = data["count"];

  const state = getState();
  const favBranches = getFavBranches(state);

  branches = branches.map((branch, id) => {
    const isFav =
      -1 !== favBranches.findIndex((fb) => fb["ifsc"] === branch["ifsc"]);

    return { id, ...branch, isFav };
  });

  dispatch(searchBranches(branches, count));
  dispatch(endLoading());
};

export const fetchBranches = () => async (dispatch, getState) => {
  const state = getState();
  const pageSize = getPageSize(state);
  const city = getCity(state);

  dispatch(searchService(city, 0, pageSize));
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

export const makeFavouriteHandler = (branch) => async (dispatch, getState) => {
  dispatch(makeFavouriteService(branch));
  dispatch(toggleFav(branch["ifsc"]));
};

export const removeFavouriteHandler = (ifsc) => async (dispatch, getState) => {
  dispatch(removeFavouriteService(ifsc));
  dispatch(toggleFav(ifsc));
};
