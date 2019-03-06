import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Lesson4 from './Lesson4';
import Lesson5 from './Lesson5';
import Lesson6 from './Lesson6';
import Lesson7 from './Lesson7';
import Lesson8 from './Lesson8';
import Lesson9 from './Lesson9';
import Lesson10 from './Lesson10';
import Lesson11 from './Lesson11';
import Lesson12 from './Lesson12';

const lessons = [Lesson1,Lesson2,Lesson3,Lesson4,Lesson5,Lesson6,Lesson7,Lesson8,Lesson9,Lesson10,Lesson11,Lesson12];

class d3Lessons extends Component {
  render(){
    const { location } = this.props;
    let path, title, lessonNum;
    return (
      <div>
        <Nav bsStyle="pills" activeKey={location.pathname}>
          {lessons.map(function(lesson, i){
            lessonNum = i + 1;
            path = '/d3/lesson/' + lessonNum;
            title = 'Lesson ' + lessonNum;
            return <NavItem key={i+'_nItem'} eventKey={path} href={path}> {title} </NavItem>;
          })}
        </Nav>
        {lessons.map(function(lesson, i){
          lessonNum = i + 1;
          path = '/d3/lesson/' + lessonNum;
          return  <Route key={i+'_route'} exact path={path} component={lesson}/>;
        })}
      </div>
    )
  }
}

export default d3Lessons;