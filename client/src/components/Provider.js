import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import store from '../store';
import App from './App';

class AppProvider extends Component {
    render() {
        return (
            <Provider store={store}>
            	<Router>
            		<Route component={App} />
              </Router>
            </Provider>
        )
    }
}

export default AppProvider;
