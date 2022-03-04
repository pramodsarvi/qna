import React from 'react';
import ReactDOM from 'react-dom';
import { proxy,useSnapshot } from 'valtio'
// require('dotenv').config
import './index.css';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
// import Post from './components/feed/post';
import AppState from './context/appState';
import Feed from './FinalFeed';
import Edit from './components/editprofile';
import Register from './components/register'
// import ProjectCard from './components/feed/projectCard';
// import UserInfo from './components/feed/userinfo';
import Login from './components/login';
import Profile from './components/profile/profile';
// import App from './App';
import reportWebVitals from './reportWebVitals';
const state=proxy({'token':'abc'});

ReactDOM.render(
  <>
  <Router>
       <div>
       <AppState>
       
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/edit"  exact component={Edit}/>
      <Route path="/feed" exact component={Feed}/>
      <Route path="/profile"  exact component={Profile}/>
      <Route path="/register"  exact component={Register}/>
      
    </Switch>
    </AppState>
       </div>

    {/* <Feed/> */}
    {/* <Profile/> */}
  </Router>
    
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// git config --global user.name "Pramod Kumar S Sarvi"
// git config --global user.email "pramodkumarssarvi@gmail.com"
// git remote add origin https://github.com/darth-coder24/qna.git