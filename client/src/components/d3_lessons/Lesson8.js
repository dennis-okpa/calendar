import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {
  render() {
    return <div className="body">
      <h1>Transitions</h1>
      <div id="chart" />
    </div>
  }
  componentDidMount() {
    const myData = [100, 125, 320, 440, 500, 50, 320, 720, 1000];

    const height = 500;
    const width = 500;
    const animateDuration = 10000;
    const animateDelay = 100;

    const tooltip = d3.select('.body').append('div')
      .style('position','absolute')
      .style('background','#f4f4f4')
      .style('padding','5 15px')
      .style('border','1px #333 solid')
      .style('border-radius','5px')
      .style('opacity','0');

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(myData)])
      .range([0, height]);

    const xScale = d3.scaleBand()
      .domain(d3.range(0, myData.length))
      .range([0, width]);

    const colors = d3.scaleLinear()
      .domain([0, myData.length])
      .range(['#90ee90', '#30c230']);

    const myChart = d3.select('#chart')
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
            .attr('height', 0)
            .attr('x', function(d, i){
              return xScale(i);
            })
            .attr('y', height)
      .on('mouseover', function(d){
        tooltip.transition()
          .style('opacity', 1);

        tooltip.html(d)
          .style('left', (d3.event.pageX)+'px')
          .style('top', (d3.event.pageY+'px'));

        d3.select(this).style('opacity', 0.5);
      })
      .on('mouseout', function(d){
        tooltip.transition()
          .style('opacity', 0);

        d3.select(this).style('opacity', 1);
      });

    myChart.transition()
      .attr('height', function(d){
        return yScale(d);
      })
      .attr('y', function(d){
        return height - yScale(d);
      })
      .duration(animateDuration)
      .delay(function(d, i){
        return i * animateDelay;
      })
      .ease(d3.easeElastic);

  }
}

export default Graph;