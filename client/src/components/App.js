import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../styles/App.css';
import Calendar from '../containers/calendar';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
 
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
 
 
//specify the base color/background of the parent container if needed
const MySideNav = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
            <Nav id='dashboard'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
                <NavText> <Link to="/">Dashboard</Link> </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link to="/calendar">Calendar</Link> </NavText>
            </Nav>
        </SideNav>
        <App />
    </div>
);

const Home = () => (
  <div>
    <h2> Home </h2>
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
  render() {
    return (
      <div>
      	<MySideNav />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/cities">Cities</Link></li>
          <li><Link to="/courses">Courses</Link></li>
        </ul>

        <Route path="/" exact component={Home}/>
        <Route path="/calendar" component={CalendarPage}/>
        <Route path="/cities" component={City}/>
        <Route path="/courses" component={Courses}/>
      </div>
    );
  }
}

export default App;