import {} from "./actions";

const initialState = { candidates: [], isLoading: false, searchText: "" };

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // case FETCH_CANDIDATES_LOADING: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }

    default:
      return state;
  }
};

export default reducer;
