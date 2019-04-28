import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    
    , document.getElementById('root'));
