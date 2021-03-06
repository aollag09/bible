import React from 'react';
import ReactDOM from 'react-dom';
import './common/utils/i18n'
import {App} from './application';
import * as serviceWorker from './common/utils/serviceWorker';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
