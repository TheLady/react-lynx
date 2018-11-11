import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Typer  from './Typer';


export default (
  <Route path='/' component={App}>
    <Route path='contact' component={Typer} />
  </Route>
);
