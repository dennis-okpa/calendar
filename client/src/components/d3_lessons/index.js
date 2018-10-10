import React from 'react';
import { Route } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import Lesson1 from './D3Lesson1';

const d3Lessons = ({ match, onSelect }) => {
  return (
    <div>
      <Nav bsStyle="pills" activeKey={1}>
        <NavItem eventKey={1} href="/d3/lesson1">
          Lesson 1
        </NavItem>
      </Nav>

      <Route exact path="/d3/lesson1" component={Lesson1}/>
    </div>
)};

export default d3Lessons;