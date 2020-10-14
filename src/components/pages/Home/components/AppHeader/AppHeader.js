import React from "react";

import "./AppHeader.scss";

const AppHeader = ({ humans, done }) => (
  <div className="appHeader d-flex">
    <h1>All Humans</h1>
    <h2>
      {humans} more to do, {done} done
    </h2>
  </div>
);

export default AppHeader;
