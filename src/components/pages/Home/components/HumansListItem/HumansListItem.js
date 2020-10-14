// core
import React from "react";

// components
import "./HumansListItem.scss";

const HumansListItem = ({
                            label,
                            onDeleted,
                            onToggleDoneItem,
                            onToggleImportantItem,
                            done,
                            important
                        }) => {
    let className = "humansListItem";

    if (done) {
        className += " done";
    }
    if (important) {
        className += " important";
    }

    return (
        <span className={className}>
      <span className="humansListItemLabel" onClick={onToggleDoneItem}>
        {label}
      </span>
      <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportantItem}>
        <i className="fa fa-edit" />
      </button>
      <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
};

export default HumansListItem;
