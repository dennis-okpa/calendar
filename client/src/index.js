import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
// bsStyle ["success","warning","danger","info","default","primary","link"]
import 'react-notifications/lib/notifications.css'; // https://www.npmjs.com/package/react-notifications
import './styles/navbar.css';
import './styles/navbar-top.css';
import './styles/index.css';
import "./styles/popupS.css";
import './styles/calendar.css';
import Provider from './components/Provider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider />, document.getElementById('root'));
registerServiceWorker();
