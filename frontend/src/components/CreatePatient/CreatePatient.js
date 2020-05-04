import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addPatientAC } from '../../redux/action-creator'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
// рег пациента

class CreatePatient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      age: undefined,
      sex: '',
      address: '',
      phone: '',
      diagnosis: '',
      doctorName: '',
      doctorSurname: '',
      doctorPhone: '',
    }
  }

  componentWillMount() {
    if (!this.props.state.user) this.props.history.push('/login')
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, surname, age, sex, address, phone, diagnosis, doctorName, doctorSurname, doctorPhone } = this.state;
    const { _id } = this.props.state.user; // КЛЮЧИТЬ REDUX И ВЫТАСКИВАТЬ ИЗ СТОРА ID А ДЛЯ ПЕРЕДАЧИ НА БЭК!!!!!
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, surname, age, sex, address, phone, diagnosis, doctorName, doctorSurname, doctorPhone, _id })
    }
    const response = await fetch('/patient', requestOptions)
    const result = await response.json();
    if (result) {
      this.props.addPatient(result);
      this.props.history.push('/profile')
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Регистрация пациента</h1>
          <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
        </Col>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm={2}>
              Имя
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="name" type="text" placeholder="Имя пациента" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="surname">
            <Form.Label column sm={2}>
              Фамилия
          </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="surname" placeholder="Фамилия пациента" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="age">
            <Form.Label column sm={2}>
              Возраст
         </Form.Label>
            <Col sm={10}>
              <Form.Control name="age" type="number" min="1" max="120" placeholder="Возраст пациента" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} controlId="sex">
              <Form.Label as="legend" column sm={2}>
                Пол пациента
            </Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Мужчина"
                  value="Мужчина"
                  name="sex"
                  id="sex-men"
                  onChange={this.handleChange}
                />
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Женщина"
                  value="Женщина"
                  name="sex"
                  id="sex-woman"
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} controlId="address">
            <Form.Label column sm={2}>
              Адрес
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="address" placeholder="Местонахождения пациента (город, улица, дом)" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="phone">
            <Form.Label column sm={2}>
              Телефон
          </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="phone" placeholder="Номер телефона пациента" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="diagnosis">
            <Form.Label column sm={2}>
              Диагноз
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="diagnosis" placeholder="Диагноз пациента (деменция, рак и т.д.)" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="doctorName">
            <Form.Label column sm={2}>
              Имя лечащего врача
          </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="doctorSurname" placeholder="Имя лечащего врача" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="doctorName">
            <Form.Label column sm={2}>
              Фамилия лечащего врача
          </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="doctorSurname" placeholder="Фамилия лечащего врача" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="doctorPhone">
            <Form.Label column sm={2}>
              Телефон лечащего врача
          </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" name="doctorPhone" placeholder="Номер телефона лечащего врача" onChange={this.handleChange} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button style={{ backgroundColor: "#047B7C" }} type="submit">Добавить</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>)

  }
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = dispatch => ({
  addPatient: (patient) => dispatch(addPatientAC(patient))
})

export default connect(mapStateToProps,mapDispatchToProps)(CreatePatient);
