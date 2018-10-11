import React, { Component } from 'react';

class Graph extends Component {
  render() {
    return <div>
      <h1>Drawing Basic Shapes with SVG Part 1</h1>
      <h1>SVG Shapes</h1>
      <svg width="400" height="400" style={{'background':'#f4f4f4'}}>
        <rect
          width="300"
          height="300"
          x="50"
          y="50"
          style={
            {'fill':'rgb(255,0,0)',
              'stroke':'rgb(0,0,0)',
              'stroke-width':'1'
            }
          }
        />
      </svg>
      <svg width="400" height="400" style={{'background':'#f4f4f4'}}>
        <circle
          cx="250"
          cy="250"
          r="40"
          stroke="black"
          stroke-width="1"
          fill="yellow"
        />
      </svg>
    </div>
  }
  componentDidMount() {
  }
}

export default Graph;