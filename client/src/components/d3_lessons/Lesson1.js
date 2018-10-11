import React, { Component } from 'react';
import * as d3 from "d3";
import "../../styles/graph.css"
//import * as dagreD3 from "dagre-d3";

class Graph extends Component {
  render() {
    return <div>
      <h1>Basic Selection</h1>
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
    d3.selectAll(".items li:nth-child(even)")
      .style("color", "red")
      .html('This is an even number')
      .classed('big', true);
  }
}

export default Graph;