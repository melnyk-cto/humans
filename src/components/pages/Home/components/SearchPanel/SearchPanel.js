import React from "react";

import "./SearchPanel.scss";

const SearchPanel = ({ term, setTerm }) => {
  const searchItem = e => {
    setTerm(e.target.value);
  };

  return (
    <input
      type="search"
      placeholder="search"
      className="searchPanel form-control"
      onChange={searchItem}
      value={term}
    />
  );
};

export default SearchPanel;
