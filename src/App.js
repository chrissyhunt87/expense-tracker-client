import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './containers/Login/Login';
import Expenses from './containers/Expenses/Expenses';
import Question from './Question/Question';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/expenses" component={Expenses} />
          <Route path="/question" component={Question} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
