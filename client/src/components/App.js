import React, { Component } from 'react';
import '../styles/App.css';
import Calendar from '../containers/calendar';

class App extends Component {
    render() {
        console.log('props', this.props);
        return (
            <div className="App">
                <main role="main" className="container">
                    <Calendar />
                </main>
            </div>
        )
    }
}

export default App;
