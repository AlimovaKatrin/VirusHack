import React, { Component } from 'react';
import './App.css'

import { connect } from 'react-redux';
import { recieveUserAC } from './redux/action-creator';

export class App extends Component {
  componentDidMount(){
    this.props.recieveUser()
    
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello React</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = dispatch => ({
  recieveUser: () => dispatch(recieveUserAC(true))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

