import { makeFavourite, removeFavourite } from "./actions";

export const makeFavouriteHandler = (branch) => async (dispatch) => {
  console.log(branch);
  dispatch(makeFavourite(branch));
};

export const removeFavouriteHandler = (ifsc) => async (dispatch) => {
  dispatch(removeFavourite(ifsc));
};
