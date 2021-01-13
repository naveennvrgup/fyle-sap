import { makeFavourite, removeFavourite } from "./actions";

export const makeFavouriteService = (branch) => async (dispatch) => {
  dispatch(makeFavourite(branch));
};

export const removeFavouriteService = (ifsc) => async (dispatch) => {
  dispatch(removeFavourite(ifsc));
};
