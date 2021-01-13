import * as actions from "./actions";

const initialState = { isLoading: false };

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actions.SET_LOADING: {
      return {
        isLoading: true,
      };
    }

    case actions.END_LOADING: {
      return {
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default reducer;
