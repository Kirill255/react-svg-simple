import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Rectangle, Circle, Ellipse, Line, Some, Polyline, Polygon, Heart, Heart2, SomeShape } from "./Shapes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

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
