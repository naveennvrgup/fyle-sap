import * as actions from "./actions";

const initialState = {
  branches: [],
  searchText: "",
  city: "",
  pageSize: 5,
  count: 0,
  pgno: 1,
  apiCache: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  state = { ...initialState, ...state };

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
      if (idx !== -1) {
        branches[idx]["isFav"] = !branches[idx]["isFav"];
      }

      return {
        ...state,
        branches,
      };
    }

    case actions.SET_API_CACHE: {
      const { uri, data } = payload;
      const { apiCache } = state;

      return {
        ...state,
        apiCache: {
          ...apiCache,
          [uri]: data,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
