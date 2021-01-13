import * as actions from "./actions";

const initialState = {
  branch: {},
  apiCache: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  state = { ...initialState, ...state };

  switch (type) {
    case actions.FETCH_BRANCH: {
      const { branch } = payload;

      return {
        ...state,
        branch,
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

    case actions.TOGGLE_FAV: {
      const { branch } = state;

      return {
        ...state,
        branch: {
          ...branch,
          isFav: !branch["isFav"],
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
