import React from "react";
import { connect } from "react-redux";

import Toolbar from "./Toolbar";
// import Table from "./Table";

export const Favorites = (props) => {
  return (
    <div>
      <Toolbar />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
