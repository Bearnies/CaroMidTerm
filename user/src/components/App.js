import React from 'react';
import './App.css';
import Game from '../containers/GameCon'
import AccountLogin from '../containers/UserLogin';
import AccountSignup from '../containers/UserSignup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return <Router>
      <Switch>
        <Route exact path ='/' component={AccountLogin}></Route>
        <Route path ='/login' component={AccountLogin}></Route>
        <Route path ='/home' component={Game}></Route>
        <Route path ='/signup' component={AccountSignup}></Route>
      </Switch>   
  </Router>
}

export default App;
