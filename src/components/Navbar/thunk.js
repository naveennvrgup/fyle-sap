import { setLoading, endLoading } from "./actions";

export const setLoadingHandler = (id) => async (dispatch) => {
  dispatch(setLoading());
};

export const endLoadingHandler = (id) => async (dispatch) => {
  dispatch(endLoading());
};
