import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}
