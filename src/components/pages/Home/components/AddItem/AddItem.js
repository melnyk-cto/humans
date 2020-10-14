import React, { Component } from "react";

import "./AddItem.scss";

class AddItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = e => {
        this.setState({
            label: e.target.value
        })
    };

  render() {
    const { addItem } = this.props;
    const { label } = this.state;

    const onSubmit = e => {
      // e.preventDefault() нужен для того что бы страница не перезагружалась
      e.preventDefault();
      addItem(label);
      this.setState({
          label: ''
      })
    };

    return (
      // onSubmit нужен для отправки формы (будет работать "Enter" и автоматически кнопка если у нее есть type:"submit")
      <form className="addItem d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          className="addItemInput form-control"
          placeholder="Enter text..."
          // onChange - используется что бы получить текущеее значение
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add human
        </button>
      </form>
    );
  }
}

export default AddItem;
