import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import CreatePatient from './components/CreatePatient/CreatePatient'
import PrfilaktikaPadenij from './components/InfoBase/PrfilaktikaPadenij'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <Profile />
        <CreatePatient />
        <PrfilaktikaPadenij />
      </div>
    )
  }
}
