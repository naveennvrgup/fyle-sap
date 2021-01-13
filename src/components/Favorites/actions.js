export const MAKE_FAVOURITE = "MAKE_FAVOURITE";
export const makeFavourite = (branch) => ({
  type: MAKE_FAVOURITE,
  payload: { branch },
});

export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const removeFavourite = (ifsc) => ({
  type: REMOVE_FAVOURITE,
  payload: { ifsc },
});
