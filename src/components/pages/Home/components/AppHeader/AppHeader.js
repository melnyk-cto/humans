import React from "react";

import "./AppHeader.scss";

const AppHeader = ({humans}) => (
    <div className="appHeader d-flex">
        <h1>All Humans</h1>
        <h2>
            {humans} humans
        </h2>
    </div>
);

export default AppHeader;
