import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {
  render() {
    return <div className="body">
      <h1>Using Scales</h1>
      <div id="chart" />
    </div>
  }
  componentDidMount() {
    const myData = [100, 125, 320, 440, 500, 50, 320, 720, 1000];

    const height = 500;
    const width = 500;

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(myData)])
      .range([0, height]);

    const xScale = d3.scaleBand()
      .domain(d3.range(0, myData.length))
      .range([0, width]);

    const colors = d3.scaleLinear()
      .domain([0, myData.length])
      .range(['#90ee90', '#30c230']);

    d3.select('#chart')
      .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#f4f4f4')
        .selectAll('rect')
          .data(myData)
          .enter()
          .append('rect')
            .style('fill', function(d, i){
              return colors(i);
            })
            .attr('width', xScale.bandwidth())
            .attr('height', function(d){
              return yScale(d);
            })
            .attr('x', function(d, i){
              return xScale(i);
            })
            .attr('y', function(d){
              return height - yScale(d);
            })

  }
}

export default Graph;