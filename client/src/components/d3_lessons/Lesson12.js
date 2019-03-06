import React, { Component } from 'react';

class Practice extends Component {
  render() {
    var convert = require('xml-js');
    var xml =
      '<?xml version="1.0" encoding="utf-8"?>' +
      '<note importance="high" logged="true">' +
      '    <title>Happy</title>' +
      '    <todo>Work</todo>' +
      '    <todo>Play</todo>' +
      '</note>';
    var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
    var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
    console.log(result1, '\n', result2);
    return <div className="body">
      <h1>Practice</h1>
      {xml}
      {result1}
      <br/>
      {result2}
    </div>
  }
}

export default Practice;