import * as actions from "./actions";

const initialState = { branches: [], searchText: "" };

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

    case actions.LOCAL_FILTER: {
      const { searchText } = payload;

      return {
        ...state,
        searchText,
      };
    }

    default:
      return state;
  }
};

export default reducer;
