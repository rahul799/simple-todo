import React, { Component } from "react";
import FlipMove from "react-flip-move";

class ChildItem extends Component {
  constructor(props) {
    super(props);

    this.createChildTasks = this.createChildTasks.bind(this);
  }
  childDelete(key) {
    this.props.delete(key);
  }
  createChildTasks(childItem) {
    return (
      <li key={childItem.key} onClick={() => this.childDelete(childItem.key)}>
        {childItem.text}
      </li>
    );
  }

  render() {
    var todoChildEntries = this.props.childEntries;
    var listchildItem = todoChildEntries.map(this.createChildTasks);
    // console.log(todoEntries);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listchildItem}
        </FlipMove>
      </ul>
    );
  }
}

export default ChildItem;
