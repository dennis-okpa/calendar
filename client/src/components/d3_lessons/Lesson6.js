import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {
  render() {
    return <div className="body">
      <h1>Simple Bar Chart</h1>
      <div id="chart" />
    </div>
  }
  componentDidMount() {
    const myData = [100, 125, 320, 440, 500, 250, 320, 120, 50];

    const height = 500;
    const width = 500;

    const barWidth = 35;
    const barOffset = 5;

    const myChart = d3.select('#chart')
      .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#f4f4f4')
        .selectAll('rect')
          .data(myData)
          .enter()
          .append('rect')
            .style('fill', 'lightgreen')
            .attr('width', barWidth)
            .attr('height', function(d){
              return d;
            })
            .attr('x', function(d, i){
              return i*(barWidth+barOffset);
            })
            .attr('y', function(d){
              return height - d;
            })

  }
}

export default Graph;