// Code ClickityClick Component Here
import React, { Component } from "react";
class ClickityClick extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // let newCount = this.state.count + 1;
    this.setState((previousState) => {
      return { count: previousState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* <p>
          I have {this.state.hasBeenClicked ? null : "not"} has been clicked!
        </p> */}
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
