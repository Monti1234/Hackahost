import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

import './App.css';


class App extends Component {
constructor(){
  super();
  this.state = {
    token:null
  }
}
componentDidMount(){
  let token
  try {
    token = JSON.parse(localStorage.getItem('token')).token
  }
  catch(err) {
    token = ""
  }
  axios.defaults.headers.common['Authorization'] = token;
};


  render() {
    console.log(localStorage.getItem('token'))
    return (
     <Router>
        <Routes/>
     </Router>
    );
  }
}

export default App;
