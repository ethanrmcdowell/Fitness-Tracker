import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Header from './components/Header';

import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
