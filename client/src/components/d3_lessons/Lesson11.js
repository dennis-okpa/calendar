import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {
  render() {
    return (
      <div className="body">
        <h1>Practice</h1>
        <div id="familyTree" />
      </div>
    );
  }
  svgRender(){
    const familyTree = d3.select('#familyTree')
      .append('svg')
      .attr('height', 800)
      .attr('width', 1000)
      .style('background', '#f4f4f4');

    familyTree.append('circle')
      .attr('cx', 200)
      .attr('cy', 200)
      .attr('r', 50)
      .style('fill','none')
      .style('stroke','black')
      .style('stroke-width','1');

    familyTree.append('circle')
      .attr('cx', 600)
      .attr('cy', 200)
      .attr('r', 50);

    familyTree.append('line')
      .attr('x1', 200)
      .attr('y1', 200)
      .attr('x2', 600)
      .attr('y2', 200)
      .style('stroke', '#000')
      .style('stroke-width', 5);

    familyTree.append('line')
      .attr('x1', 400)
      .attr('y1', 200)
      .attr('x2', 400)
      .attr('y2', 600)
      .style('stroke', '#000')
      .style('stroke-width', 5);

    d3.line()
      .x(250)
      .y(250);
  }
  componentDidUpdate(){
    this.svgRender();
  }
  componentDidMount() {
    this.svgRender();
  }
}

export default Graph;