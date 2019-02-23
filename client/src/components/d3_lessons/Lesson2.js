import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {
  render() {
    return <div>
      <h1>Simple Data</h1>
      <p>My name is <span className="name" /></p>
      <ul className="items">
        <li>This is an item</li>
        <li>This is an item</li>
        <li>This is an item</li>
        <li>This is an item</li>
        <li>This is an item</li>
      </ul>
    </div>
  }
  componentDidMount() {
    const numArray = [12, 20, 33, 40, 55, 60, 75, 80];

    const name = 'John doe';

    const li = d3.select('.items').selectAll('li')
      .data(numArray)
      .text(function(d){
        return 'This is item number ' + d;
      });

    li.enter().append('li')
      .text(function(d){
        return 'This is item number ' + d;
      })
      .style('font-size', function(d){
        return d+'px';
      });

    li.exit().remove();

    d3.select('.name').text(name);
  }
}

export default Graph;