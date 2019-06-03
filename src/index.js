import React from 'react';
import ReactDOM from 'react-dom';

import CanvasContainer from './CanvasContainer';
import * as serviceWorker from './serviceWorker';

import "./Styles/canvas.css";

ReactDOM.render(
    <CanvasContainer />, 
    document.getElementById("canvas")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
