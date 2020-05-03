import React from 'react';
import {
  Navbar, Nav, Form, FormControl, Button
} from 'react-bootstrap';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
// import Login from '../Login/Login'
// import Signup from '../SignUp/SignUp'

const styles = {
  backgroundColor: 'green',
}

const NavBar = () => {
  return (
    <>
      <Navbar style={styles} variant="dark">
        <Navbar.Brand>Мастерская заботы</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Домой </Nav.Link>
          <Nav.Link as={Link} to="/login">Войти </Nav.Link>
          <Nav.Link as={Link} to="/signup">Зарегистрироваться </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Искать" className="mr-sm-2" />
          <Button variant="success">Поиск</Button>
        </Form>
      </Navbar>

      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route path="/login">
          {/* <Login /> */}
        </Route>
        <Route path="/signup">
          {/* <Signup /> */}
        </Route>
      </Switch>
    </>
  )
}
export default NavBar;
