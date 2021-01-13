import * as actions from "./actions";

const initialState = {
  favBranches: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.MAKE_FAVOURITE: {
      const { branch } = payload;
      let { favBranches } = state;
      favBranches.unshift(branch);

      return {
        favBranches,
      };
    }

    case actions.REMOVE_FAVOURITE: {
      const { ifsc } = payload;
      let { favBranches } = state;
      favBranches = favBranches.filter((branch) => branch["ifsc"] !== ifsc);

      return {
        favBranches,
      };
    }

    default:
      return state;
  }
};

export default reducer;
