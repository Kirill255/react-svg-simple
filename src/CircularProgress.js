import React, { Component } from "react";
import "./CircularProgress.css";

class CircularProgress extends Component {
  render() {
    const { percent, size, strokeWidth } = this.props;

    const radius = size / 2 - strokeWidth;
    const dashArray = 2 * Math.PI * radius; // 2πr
    const dashOffset = dashArray - (dashArray * percent) / 100;

    return (
      <svg
        className="CircularProgress__container"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className="CircularProgress__bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="CircularProgress__fg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </svg>
    );
  }
}

export default CircularProgress;

/* 
https://developer.mozilla.org/ru/docs/Web/SVG/Attribute/stroke-dasharray
https://developer.mozilla.org/ru/docs/Web/SVG/Attribute/stroke-dashoffset
*/
