import React, { Component } from "react";

// Классы используют когда нужно хранить остояния и они наследуют React.Component
export default class ItemStatusFilter extends Component {
  buttons = [
    { id: 0, label: "All", name: "all" },
    { id: 1, label: "Active", name: "active" },
    { id: 2, label: "Done", name: "done" }
  ];

  render() {
    const { filter, setFilter } = this.props;

    const onFilterChange = label => {
      setFilter(label);
    };

    const buttons = this.buttons.map(({ id, name, label }) => {
      const isActive = filter === name ? "btn-info" : "btn-outline-secondary";

      return (
        <button
          key={id}
          type="button"
          className={`btn ${isActive}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
