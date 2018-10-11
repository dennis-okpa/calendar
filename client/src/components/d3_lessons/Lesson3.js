import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {
  render() {
    return <div>
      <h1>Basic Static Chart</h1>
      <h3>Top Smartphones</h3>
      <ul className="items">
        <li>iPhone 6</li>
        <li>Galaxy S6</li>
        <li>LG G3</li>
        <li>Windows</li>
        <li>HTC One</li>
      </ul>
    </div>
  }
  componentDidMount() {
    const styles = [
      {
        'background': 'red',
        'color': 'white',
        'width': '35'
      },
      {
        'background': 'yellow',
        'color': 'black',
        'width': '25'
      },
      {
        'background': 'green',
        'color': 'white',
        'width': '20'
      },
      {
        'background': 'black',
        'color': 'white',
        'width': '10'
      },
      {
        'background': 'orange',
        'color': 'white',
        'width': '10'
      }
    ];

    d3.selectAll('.items li')
      .data(styles)
      .style('font-size','18px')
      .style('padding','6px')
      .style('margin','4px')
      .style('list-style','none')
      .style('background', function(d){
        return d.background;
      })
      .style('color',function(d){
        return d.color;
      })
      .style('width',function(d){
        return d.width+'%';
      });
  }
}

export default Graph;