import React, { Component } from "react";

export default class Sparkline extends Component {
  getPoints() {
    const { data, width, height } = this.props;

    const maxValue = data.reduce((max, val) => (val > max ? val : max));
    const minValue = data.reduce((min, val) => (val < min ? val : min));

    return data.map(
      (value, i) => ({
        x: i * (width / data.length),
        y: (maxValue - value) * (height / (maxValue - minValue))
      }),
      {}
    );
  }

  render() {
    const { width, height } = this.props;

    const points = this.getPoints();
    const pointsDescriptions = points.map((p) => `${p.x},${p.y}`).join(" ");

    return (
      <div>
        <svg width={width} height={height}>
          <polyline
            points={pointsDescriptions}
            strokeWidth={5}
            stroke="blue"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }
}

/* 
https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin
https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
*/
