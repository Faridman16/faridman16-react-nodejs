import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './stores/store';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Flame from './components/Flame';
import Admin from './components/Admin';



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ,document.getElementById('root')
);
registerServiceWorker();
