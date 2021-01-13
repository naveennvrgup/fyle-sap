import React from "react";
import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import Table from "./Table";

export const BranchList = (props) => {
  return (
    <div>
      <Toolbar />
      <Table />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BranchList);
