import React, { Component } from 'react';
import { HashRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import home from './home'
import getStarted from './getStarted'
import results from './results'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='App'>
            <Route exact path='' component={home} />
            <Route exact path='/get-started' component={getStarted} />
            <Route exact path='/results' component={results} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
