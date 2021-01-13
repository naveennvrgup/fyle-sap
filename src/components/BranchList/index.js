import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import Table from "./Table";
import { fetchBranches } from "./thunk";

export const BranchList = ({ fetchBranches }) => {
  useEffect(() => {
    fetchBranches();
  }, []);

  return (
    <div>
      <Toolbar />
      <Table />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchBranches }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BranchList);
