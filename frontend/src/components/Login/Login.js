import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    console.log(this.state);

    if (result.user) {
      this.setState({
        user: result.user,
      });
    } else if (result.message) {
      this.setState({
        message: result.message,
      });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <Container className="login">
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
          <Button variant="outline-success" type="submit">
            Войти
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
