import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card'

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        {/* <NavBar /> */}
        <Card />
      </div>
    )
  }
}
