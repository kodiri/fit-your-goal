import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './home'
import getStarted from './getStarted'
import results from './results'
import './App.css';
import { Link } from 'react-router-dom';
import homeIcon from './iconmonstr-home-6 (1).svg'
import fitIcon from './iconmonstr-medical-6.svg'

class App extends Component {
  render() {
    return (
      <Router>
          <div className='App'>
            <nav className='banner'>
            <div className='icon'>
                  <Link to={'/'}> 
                    <img className='imagee' src={homeIcon} alt=''/> 
                  </Link>
                </div>
              <div className='icon'>
                  <img className='imagee2' src={fitIcon} alt=''/> 
              </div>
                
            </nav>
              <Route exact path='' component={home} />
              <Route exact path='/get-started' component={getStarted} />
              <Route exact path='/results' component={results} />
          </div>
      </Router>
    );
  }
}

export default App;
