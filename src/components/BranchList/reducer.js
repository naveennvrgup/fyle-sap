import * as actions from "./actions";

const initialState = {
  branches: [],
  searchText: "",
  city: "",
  pageSize: 10,
  offset: 0,
  count: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SEARCH_BRANCHES: {
      const { branches, count } = payload;

      return {
        ...state,
        branches,
        count,
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

    case actions.PAGE_SIZE_CHANGE: {
      const { pageSize } = payload;

      return {
        ...state,
        pageSize,
      };
    }

    default:
      return state;
  }
};

export default reducer;
