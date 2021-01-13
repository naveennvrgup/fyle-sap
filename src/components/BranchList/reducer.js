import * as actions from "./actions";

const initialState = { branches: [], searchText: "", city: "" };

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

    case actions.CITY_CHANGE: {
      const { city } = payload;

      return {
        ...state,
        city,
      };
    }

    default:
      return state;
  }
};

export default reducer;
