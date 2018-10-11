import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {
  render() {
    return <div className="body">
      <h1>Axes and Guides Part 1</h1>
      <div id="chart" />
    </div>
  }
  svgRender(){

    const myData = [100, 125, 320, 440, 500, 250, 320, 720, 50, 300, 400, 500];

    const margin = {
      top: 30,
      right: 30,
      bottom: 40,
      left: 50
    };

    const height = 500 - margin.top - margin.bottom;
    const width = 500 - margin.right - margin.left;
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
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate('+margin.left+','+margin.top+')')
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

    const vScale = d3.scaleLinear()
      .domain([0, d3.max(myData)])
      .range([height, 0]);

    const hScale = d3.scaleBand()
      .domain(d3.range(0, myData.length))
      .range([0, width]);

    // V Axis
    const vAxis = d3.axisLeft(vScale)
      .ticks(5)
      .tickPadding(5);

    // V Guide
    const vGuide = d3.select('.body svg')
      .append('g');

    vAxis(vGuide);

    vGuide.attr('transform', 'translate('+margin.left+','+margin.top+')');

    vGuide.selectAll('path')
      .style('fill', 'none')
      .style('stroke', '#000');

    vGuide.selectAll('line')
      .style('stroke', '#000');

    // H Axis
    const hAxis = d3.axisBottom(hScale)
      .tickValues(hScale.domain().filter(function(d, i){
        return !(i % (myData.length/6));
      }));

    // H Guide
    const hGuide = d3.select('.body svg')
      .append('g');

    hAxis(hGuide);

    hGuide.attr('transform', 'translate('+margin.left+','+(height+margin.top)+')');

    hGuide.selectAll('path')
      .style('fill', 'none')
      .style('stroke', '#000');

    hGuide.selectAll('line')
      .style('stroke', '#000');
  }
  componentDidUpdate(){
    this.svgRender();
  }
  componentDidMount() {
    this.svgRender();
  }
}

export default Graph;