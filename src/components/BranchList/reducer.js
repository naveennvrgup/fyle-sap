import * as actions from "./actions";

const initialState = {
  branches: [],
  searchText: "",
  city: "",
  pageSize: 5,
  count: 0,
  pgno: 1,
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
        pgno: 1,
      };
    }

    case actions.PAGE_SIZE_CHANGE: {
      const { pageSize } = payload;

      return {
        ...state,
        pageSize,
        pgno: 1,
      };
    }

    case actions.PGNO_CHANGE: {
      const { pgno } = payload;

      return {
        ...state,
        pgno,
      };
    }

    case actions.TOGGLE_FAV: {
      const { ifsc } = payload;
      const branches = [...state.branches];

      const idx = branches.findIndex((branch) => branch["ifsc"] === ifsc);
      branches[idx]["isFav"] = !branches[idx]["isFav"];

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
