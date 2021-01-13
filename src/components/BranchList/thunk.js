import { setLoading, endLoading } from "../Navbar/actions";
import { searchBranches } from "./actions";

export const searchBranchesHandler = (q, limit, offset) => async (dispatch) => {
  dispatch(setLoading());

  let response = await fetch(
    `https://fyle-server.herokuapp.com/api/branches?q=${q}&offset=${offset}&${limit}=4`
  );
  let data = await response.json();
  let branches = data["branches"];
  branches = branches.map((branch, id) => ({ id, ...branch }));
  dispatch(searchBranches(branches));

  dispatch(endLoading());
};
