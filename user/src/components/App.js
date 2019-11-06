import React from 'react';
import './App.css';
import Game from '../containers/GameCon'
import AccountLogin from '../containers/UserLogin';
import AccountSignup from '../containers/UserSignup';
import AccountProfile from '../containers/UserProfile';
import HomePage from '../components/HomePage';
import GameWithBOT from '../components/GameWithBOT';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


function App() {
  return <Router>
      <Switch>
        <Route exact path ='/' component={HomePage}></Route>
        <Route path ='/login' component={AccountLogin}></Route>
        <Route path ='/gameWithBOT' component={GameWithBOT}></Route>
        <Route path ='/game' component={Game}></Route>
        <Route path ='/signup' component={AccountSignup}></Route>
        <Route path ='/profile' component={AccountProfile}></Route>
      </Switch>   
  </Router>
}

export default App;
