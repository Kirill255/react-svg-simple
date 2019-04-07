import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  Rectangle,
  Circle,
  Ellipse,
  Line,
  Some,
  Polyline,
  Polygon,
  Heart,
  Heart2,
  SomeShape
} from "./Shapes";

import CircularProgress from "./CircularProgress";

class App extends Component {
  state = { value: 0 };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <button
          onClick={() =>
            this.setState({ value: this.state.value >= 100 ? 0 : this.state.value + 10 })
          }
        >
          +
        </button>
        <CircularProgress size={100} strokeWidth={10} percent={this.state.value} />

        <Rectangle />
        <Circle />
        <Ellipse />
        <Line />
        <Some />
        <Polyline />
        <Polygon />
        <Heart />
        <Heart2 size={200} color="#EC407A" />
        <SomeShape type="cake" size={150} color="#CDDC39" />
      </div>
    );
  }
}

export default App;
