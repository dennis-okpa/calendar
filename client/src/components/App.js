import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Calendar from '../containers/calendar';
import d3Lessons from './d3_lessons';

import SideNav, { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import {ic_school} from 'react-icons-kit/md/ic_school'
import { calendar } from 'react-icons-kit/icomoon/calendar';

const HomePage = () => (
  <div className="App">
    <main role="main" className="container">
      <p>Home</p>
    </main>
  </div>
);

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mainClass: 'sc-bdVaJa bWcVOO'
    };
  }
  onSelect = (selected) => {
    const { location, history } = this.props;
    const to = '/' + selected;
    if (location.pathname !== to) {
      history.push(to);
    }
  };
  onToggle = (expanded) => {
    if(expanded){
      this.setState({
        mainClass: 'sc-bdVaJa eupnTP'
      });
    } else {
      this.setState({
        mainClass: 'sc-bdVaJa bWcVOO'
      });
    }
  };
  render(){
    return (
      <React.Fragment>
        <SideNav onSelect={this.onSelect}  onToggle={this.onToggle}>
          <SideNav.Toggle/>
          <Nav defaultSelected="dashboard">
            <NavItem eventKey="">
              <NavIcon>
                <SvgIcon size={20} icon={ic_aspect_ratio}/>
              </NavIcon>
              <NavText>
                Dashboard
              </NavText>
            </NavItem>
            <NavItem eventKey="calendar">
              <NavIcon>
                <SvgIcon size={20} icon={calendar}/>
              </NavIcon>
              <NavText>
                Calendar
              </NavText>
            </NavItem>
            <NavItem eventKey='d3'>
              <NavIcon><SvgIcon size={20} icon={ic_school}/></NavIcon>
              <NavText>
                D3 Lessons
              </NavText>
            </NavItem>
          </Nav>
        </SideNav>
        <div className={this.state.mainClass}>
          <Route path="/" exact component={HomePage}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/d3" onSelect={this.onSelect} onToggle={this.onToggle} component={d3Lessons}/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;