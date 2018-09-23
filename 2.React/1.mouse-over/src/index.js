import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseOnCard: false };
  }

  mouseEnter = () => {
    this.setState({ mouseOnCard: true });
  };
  mouseLeave = () => {
    this.setState({ mouseOnCard: false });
  };

  render() {
    let activeClassName = this.state.mouseOnCard ? "Active" : ""
    return (
      <div
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        className={`Card ${activeClassName}`}
      />
    );
  }
}

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
