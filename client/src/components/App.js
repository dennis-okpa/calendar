import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEvents } from '../actions/events';
import Calendar from '../containers/calendar';

class App extends Component {
    componentWillMount(){
        this.props.fetchEvents();
    }
    render() {
        console.log('props', this.props);
        return (
            <div className="App">
                <main role="main" className="container">
                    <Calendar />
                </main>
                <h1>Events</h1>
                <ul>
                    {this.props.events.map(user => <li key={user.id}>{user.summary}</li>)}
                </ul>
            </div>
        )
    }
}

App.propTypes = {
    fetchEvents: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    events: state.events.items
});

export default connect(mapStateToProps, { fetchEvents })(App);
