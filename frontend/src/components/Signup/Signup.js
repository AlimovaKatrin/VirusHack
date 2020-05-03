import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import { recieveUserAC } from '../../redux/action-creator';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      status: true,
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, status, password } = this.state;
    // this.setState({ name: '', email: '', status: false });
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, status, password })
    }
    const response = await fetch('/auth/signup', requestOptions)
    const result = await response.json();
    if (result.user) {
      this.props.recieveUser(await result.user);
      this.props.history.push('/profile')
    }
  };
  
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  
  render() {
    return (
      <Container className="sign-in">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={this.state.name}
              placeholder="Введите Имя Пользователя"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
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
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              name="status"
              type="checkbox"
              label="Близкий Родственник?"
              value={this.state.status}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = dispatch => ({
  recieveUser: (user) => dispatch(recieveUserAC(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
