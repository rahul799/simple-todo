import React, { Component } from "react";
import FlipMove from "react-flip-move";
import ChildItems from "./TodoChildItem";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      childItems: [],
    };

    this.addChildItem = this.addChildItem.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  addChildItem(e) {
    if (this._inputElement.value !== "") {
      var newChildItem = {
        text: this._inputElement.value,
        key: Date.now() * 10,
      };

      this.setState((prevState) => {
        return {
          childItems: prevState.childItems.concat(newChildItem),
        };
      });

      this._inputElement.value = "";
      //   console.log(newChildItems);
    }

    e.preventDefault();
  }

  deleteChildItem(key) {
    var filteredChildItems = this.state.childItems.filter(function (childItem) {
      return childItem.key !== key;
    });

    this.setState({
      items: filteredChildItems,
    });
  }

  createTasks(item) {
    return (
      <div className="card border-primary mb-4">
        <div class="card-header">
          <li key={item.key}>
            {item.text}
            <button
              className="btn btn-outline-danger"
              onClick={() => this.delete(item.key)}
            >
              Delete
            </button>
          </li>
          <li key={item.key}>
            <form onSubmit={this.addChildItem}>
              <input
                ref={(b) => (this._inputElement = b)}
                placeholder="enter task"
              ></input>
              <button type="submit">add</button>
            </form>
          </li>
          <ChildItems
            childEntries={this.state.childItems}
            childDelete={this.deleteChildItem}
          />
        </div>
      </div>
    );
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    console.log(todoEntries);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
