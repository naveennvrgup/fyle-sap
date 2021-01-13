import * as actions from "./actions";

const initialState = { branches: [] };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SEARCH_BRANCHES: {
      const { branches } = payload;

      return {
        ...state,
        branches,
      };
    }

    default:
      return state;
  }
};

export default reducer;
