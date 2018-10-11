import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {
  render() {
    return <div className="body">
      <h1>Drawing Basic Shapes with SVG Part 2</h1>
      <h1>SVG Shapes</h1>
      <div id="element"></div>
    </div>
  }
  componentDidMount() {
    d3.select('.body')
      .append('svg')
        .attr('width', 400)
        .attr('height', 400)
        .style('background', '#f4f4f4')
      .append('rect')
        .attr('width', 300)
        .attr('height', 300)
        .attr('x', 50)
        .attr('y', 50)
        .attr('z', 1)
        .style('fill', 'red')
        .style('stroke', 'black')
        .style('stroke-width', '1');

    d3.select('.body svg')
      .append('circle')
        .attr('cx', 200)
        .attr('cy', 200)
        .attr('r', 50)
        .style('fill', 'blue');
  }
}

export default Graph;