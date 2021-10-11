import React, {Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import User from './component/users/User';
import Alert from './component/layout/Alert';
import About from './component/pages/About';
import GithubState from './context/github/GithubState';
import './App.css';
import Home from './component/pages/Home'
import AlertState from './context/Alert/AlertState';
import NotFound from './component/pages/NotFound'


const App = () => {
    return (
      <GithubState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
        </div>
      </Router>
      </AlertState>
   </GithubState>
   );
}

export default App 
