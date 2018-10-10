import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../styles/App.css';
import Calendar from '../containers/calendar';
import d3Lessons from './d3_lessons';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import {ic_school} from 'react-icons-kit/md/ic_school'
import { calendar } from 'react-icons-kit/icomoon/calendar';
import { ic_business } from 'react-icons-kit/md/ic_business';

const HomePage = () => (
  <div className="App">
    <main role="main" className="container">
      <p>Home</p>
    </main>
  </div>
);

const CalendarPage = () => (
	<div className="App">
		<main role="main" className="container">
		    <Calendar />
		</main>
	</div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

const Courses = ({ match }) => (
  <div>
     <ul>
        <li><Link to="/courses/technology">Technology</Link></li>
        <li><Link to="/courses/business">Business</Link></li>
        <li><Link to="/courses/economics">Economics</Link></li>
    </ul>


    <Route exact path="/courses/technology" render={() => (<div> This is technology </div>)}/>
    <Route path="/courses/business" component={() => (<div> This is business </div>)}/>
    <Route path="/courses/economics" component={() => (<div> This is economics </div>)}/>
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
            <NavItem eventKey="dashboard">
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
            <NavItem eventKey="cities">
              <NavIcon>
                <SvgIcon size={20} icon={calendar}/>
              </NavIcon>
              <NavText>
                Cities
              </NavText>
            </NavItem>
            <NavItem eventKey="courses">
              <NavIcon>
                <SvgIcon size={20} icon={calendar}/>
              </NavIcon>
              <NavText>
                Courses
              </NavText>
            </NavItem>
          </Nav>
        </SideNav>
        <main className={this.state.mainClass}>
          <Route path="/" exact component={HomePage}/>
          <Route path="/calendar" component={CalendarPage}/>
          <Route path="/cities" component={City}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/d3" onSelect={this.onSelect} onToggle={this.onToggle} component={d3Lessons}/>
        </main>
      </React.Fragment>
    )
  }
}

export default App;