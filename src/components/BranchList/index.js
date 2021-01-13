import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import Table from "./Table";
import { searchBranchesHandler } from "./thunk";

export const BranchList = ({ searchBranchesHandler }) => {
  useEffect(() => {
    searchBranchesHandler("", "", "");
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
  bindActionCreators({ searchBranchesHandler }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BranchList);
