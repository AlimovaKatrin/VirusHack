import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class DiagMorse extends Component {
  render() {
    return (<Card style={{ width: '50rem' }}>
      <Form>
        {['Нарушение зрения', 'Приём снотворных и успокоительных препаратов', 'Случаи падения в прошлом', 'Приём препаратов понижающих а/д', 'Снижение когнитивных функций',
          'Использование вспомогательных устройств для передвижения', 'Нарушение походки', 'Нарушение равновесия', 'Наличие свыше 4-х хронических заболеваний',
          'Слабость нижних конечностей', 'Недержание мочи/кала', 'Избыточный вес'].map((value, index) => (
            <Form.Row > 
             <Col  sm={8}>
              <Form.Label>
                {index + 1}. {value}
              </Form.Label>
            </Col>
            <Col  sm={4}>
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
    </Card>)

  }
}

export default DiagMorse
