import * as actions from "./actions";

export const setLoadingHandler = (id) => async (dispatch) => {
  dispatch(actions.setLoading());
};

export const endLoadingHandler = (id) => async (dispatch) => {
  dispatch(actions.endLoading());
};
