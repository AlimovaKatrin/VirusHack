import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { connect } from 'react-redux';

import Home from '../HomePage/HomePage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Profile from '../Profile/Profile';
import CarePlanCommon from '../Plan/Common/CarePlanCommon';

import {
  Navbar, Nav, Form, FormControl, Button
} from 'react-bootstrap';

  const NavBar = (props) => {
    const { state } = props;
    console.log(props)
    return (
      <>
        <Navbar style={styles} variant="dark">
          <Navbar.Brand>Мастерская заботы</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Домой </Nav.Link>
            {state.user ? <Nav.Link as={Link} to="/profile"> Профиль </Nav.Link> : <Nav.Link as={Link} to="/login">Войти </Nav.Link>}
            {state.user ? <Nav.Link as={Link} to="/plan"> План </Nav.Link> : <Nav.Link as={Link} to="/signup">Зарегистрироваться </Nav.Link>}

          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Искать" className="mr-sm-2" />
            <Button style={{ backgroundColor: "#44A8A8" }}>Поиск</Button>
          </Form>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/plan" component={CarePlanCommon} />
        </Switch>
      </>
    )
  };

  const mapStateToProps = (state) => ({ state });

  export default connect(mapStateToProps)(NavBar);
