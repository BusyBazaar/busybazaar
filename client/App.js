import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import MainContainer from './containers/MainContainer';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContextProvider } from './context/UserContext';
import './styles.css';

class App extends Component {
  render() {
    return (
      <UserContextProvider>
        <div className="AppLayout">
        <Switch>
          <Route exact path="/login" component={ LoginContainer } />
          
          <Route exact path="/register" component={ RegisterContainer } />
          <ProtectedRoute exact path="/" component={ MainContainer } />
        </Switch>
        </div>
      </UserContextProvider>
    );
  }
}

export default App;
