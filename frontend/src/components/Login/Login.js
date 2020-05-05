import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { connect } from 'react-redux';
import { recieveUserAC } from '../../redux/action-creator';

import 'bootstrap/dist/css/bootstrap.min.css';

const loginContainer = {
  border: '1px solid lightgrey',
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await fetch('/auth/login', {
      cridentials: 'same-origin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();

    if (result.user) {
      this.props.recieveUser(await result.user);
      this.props.history.push('/profile');
    } else if (result.message) {
      this.setState({
        message: result.message,
      });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {

    return (
      <Container style={loginContainer} className="mt-5 p-3">
        <Row className="justify-content-center">
          <Col xs={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Электронная Почта</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  value={this.state.email}
                  placeholder="Введите Электронную Почту"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={this.state.password}
                  placeholder="Введите Пароль"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Войти
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
  recieveUser: (user) => dispatch(recieveUserAC(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
