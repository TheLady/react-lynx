import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Typer  from './Typer';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router';
import routes from './routes';
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Typer />, document.getElementById('typer'));
//
// ReactDOM.render(
//   <Router routes={routes} />,
//   document.querySelector('#app')
// );




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
