import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Button, Card, Form, Col, Container } from 'react-bootstrap'

class DiagMorse extends Component {
  render() {
    return (
      <Container>
        <br></br>
        <Card style={{ width: '50rem' }}>
          <Form>
            {['Нарушение зрения', 'Приём снотворных и успокоительных препаратов', 'Случаи падения в прошлом', 'Приём препаратов понижающих а/д', 'Снижение когнитивных функций',
              'Использование вспомогательных устройств для передвижения', 'Нарушение походки', 'Нарушение равновесия', 'Наличие свыше 4-х хронических заболеваний',
              'Слабость нижних конечностей', 'Недержание мочи/кала', 'Избыточный вес'].map((value, index) => (
                <Form.Row >
                  <Col sm={8}>
                    <Form.Label>
                      {index + 1}. {value}
                    </Form.Label>
                  </Col>
                  <Col sm={4}>
                    <div key={`${index}`}>
                      <Form.Check
                        custom
                        type='checkbox'
                        id={`custom-${index}`}
                        label={`Да`}
                      />
                    </div></Col>
                </Form.Row>
              ))}
          </Form>
          <Button as={Link} to="/ask/profilktica" style={{ backgroundColor: "#44A8A8" }}>Пройти опрос</Button>
        </Card>
      </Container>)

  }
}

export default DiagMorse
