import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

class CreatePatient extends Component {

  render() {
    return (
      <Container>
          <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Регистрация пациента</h1>
            <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
          </Col>

        <Form>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm={2}>
              Имя
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Имя пациента" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="surname">
            <Form.Label column sm={2}>
              Фамилия
          </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Фамилия пациента" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="age">
            <Form.Label column sm={2}>
              Возраст
         </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" min="5" max="100" placeholder="Возраст пациента" />
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
                  name="sex"
                  id="sex-men"
                />
                <Form.Check
                  inline
                  custom
                  type="radio"
                  label="Женщина"
                  name="sex"
                  id="sex-woman"
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} controlId="adress">
            <Form.Label column sm={2}>
              Адрес
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Местонахождения пациента (город, улица, дом)" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="phone">
            <Form.Label column sm={2}>
              Телефон
          </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Номер телефона пациента" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="diagnosis">
            <Form.Label column sm={2}>
              Диагноз
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Диагноз пациента (деменция, падения и т.д.)" />
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

export default CreatePatient
