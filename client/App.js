import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import MainContainer from './containers/MainContainer';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <Switch>
          <Route exact path="/login" component={ LoginContainer } />
          <Route exact path="/register" component={ RegisterContainer } />
          <ProtectedRoute exact path="/" component={ MainContainer } />
        </Switch>
      </div>
    );
  }
}

export default App;
