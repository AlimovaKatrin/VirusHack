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
import PainCalendar from '../PainCalendar/PainCalendar';
import CreatePatient from '../CreatePatient/CreatePatient';
import PatientCardDetail from '../Card/Card';
import Maps from '../Maps/Maps'

import {
  Navbar, Nav, Form, FormControl, Button
} from 'react-bootstrap';

const NavBar = (props) => {
  const { state } = props;
  console.log(props)
  return (
    <>
      <Navbar style={{ backgroundColor: "#047B7C" }} variant="dark">
        <Navbar.Brand>Мастерская заботы</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Домой </Nav.Link>
          {state.user ? <Nav.Link as={Link} to="/profile"> Профиль </Nav.Link> : <Nav.Link as={Link} to="/login">Войти </Nav.Link>}
          {state.user ? <Nav.Link as={Link} to="/plan"> Здравствуйте, {state.user.name} </Nav.Link> : <Nav.Link as={Link} to="/signup">Зарегистрироваться </Nav.Link>}

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
        <Route path="/create-patient" component={CreatePatient} />
        <Route path="/:id/patient-card" component={PatientCardDetail} />
        <Route path="/:id/pain-calendar" component={PainCalendar} />
        <Route path="/:id/plan" component={CarePlanCommon} />
        <Route path="/:id/maps" component={Maps} />
      </Switch>
    </>
  )
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(NavBar);
