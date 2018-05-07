import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Provider from './components/Provider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider />, document.getElementById('root'));
registerServiceWorker();
