import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card'
=======
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import CreatePatient from './components/CreatePatient/CreatePatient'
import PrfilaktikaPadenij from './components/CreatePatient/CreatePatient'
>>>>>>> 23d031fa27558cfa59db2e38e69ce5874c534a82

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
<<<<<<< HEAD
        {/* <NavBar /> */}
        <Card />
=======
        <Profile />

        
>>>>>>> 23d031fa27558cfa59db2e38e69ce5874c534a82
      </div>
    )
  }
}
