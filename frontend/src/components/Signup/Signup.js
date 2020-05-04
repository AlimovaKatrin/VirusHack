import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';
import { recieveUserAC } from '../../redux/action-creator';

const signupContainer = {
  border: '1px solid lightgrey',
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      status: true,
      phone: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, status, password, phone } = this.state;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, status, password, phone }),
    };
    const response = await fetch('/auth/signup', requestOptions);
    const result = await response.json();
    if (result.user) {
      this.props.recieveUser(await result.user);
      this.props.history.push('/profile');
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container style={signupContainer} className="mt-5 p-3 ">
        <Row className="justify-content-center">
          <Col xs={6}>
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
              <Form.Group controlId="formBasicPhone">
                <Form.Label>Номер Телефона</Form.Label>
                <Form.Control
                  name="phone"
                  type="tel"
                  pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                  value={this.state.phone}
                  placeholder="Введите Номер Телефона в формате"
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
              <Button className="mt-1 center" variant="success" type="submit">
                Зарегистрироваться
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
