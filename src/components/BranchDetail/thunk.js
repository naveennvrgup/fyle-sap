import { fetchBranch, setApiCache, toggleFav } from "./actions";
import { setLoading, endLoading } from "../Navbar/actions";
import { getApiCache, getIsFav, getIfsc, getBranch } from "./selector";
import { getFavBranches } from "../Favorites/selector";
import {
  removeFavouriteService,
  makeFavouriteService,
} from "../Favorites/thunk";

export const fetchBranchHandler = (ifsc) => async (dispatch, getState) => {
  dispatch(setLoading());

  const uri = `https://fyle-server.herokuapp.com/api/branches?q=${ifsc}`;
  const state = getState();
  const apiCache = getApiCache(state);
  let data;

  if (apiCache.hasOwnProperty(uri)) {
    data = apiCache[uri];
  } else {
    let response = await fetch(uri);
    data = await response.json();
    dispatch(setApiCache(uri, data));
  }

  let branches = data["branches"];
  const favBranches = getFavBranches(state);

  branches = branches.map((branch, id) => {
    const isFav =
      -1 !== favBranches.findIndex((fb) => fb["ifsc"] === branch["ifsc"]);

    return { id, ...branch, isFav };
  });

  dispatch(fetchBranch(branches[0]));
  dispatch(endLoading());
};

export const toggleFavHandler = () => async (dispatch, getState) => {
  const state = getState();
  const isFav = getIsFav(state);
  const ifsc = getIfsc(state);
  const branch = getBranch(state);

  if (isFav) {
    dispatch(removeFavouriteService(ifsc));
  } else {
    dispatch(makeFavouriteService(branch));
  }
  dispatch(toggleFav());
};
