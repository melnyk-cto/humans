import React from "react";

import "./AppHeader.scss";

const AppHeader = ({ toDo, done }) => (
  <div className="appHeader d-flex">
    <h1>All Humans</h1>
    <h2>
      {toDo} more to do, {done} done
    </h2>
  </div>
);

export default AppHeader;
