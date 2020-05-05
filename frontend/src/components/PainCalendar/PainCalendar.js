import React, { useState, useEffect } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { LineChart } from '@opd/g2plot-react';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const cont = {
  fontFamily: 'Roboto',
  border: '2px solid lightgray',
  borderRadius: '10px',
  padding: '30px',
  textAlign: 'center',
  fontFamily: 'Roboto',
  marginTop: '50px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const headers = {
  color: '#047B7C',
}

const table = {
  marginTop: '20px',
};

const PainCalendar = (props) => {
  const [pain, setPain] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleString('ru-RU'));
  const [description, setDescription] = useState('');
  const data = [
    {
      date: '01/05/2020',
      pain: 1,
      description: 'Головная боль',
    },
    {
      date: '02/05/2020',
      pain: 4,
      description: 'Мигрень',
    },
    {
      date: '03/05/2020',
      pain: 2,
      description: 'Головная боль',
    },
    {
      date: '04/05/2020',
      pain: 6,
      description: 'Боль в желудке',
    },
    {
      date: '05/05/2020',
      pain: 3,
      description: 'Боль в ногах',
    },
    {
      date: '06/05/2020',
      pain: 4,
      description: 'Боль в ногах',
    },
    {
      date: '07/05/2020',
      pain: 2,
      description: 'Спазмы в коленях',
    },
    {
      date: '05/05/2020',
      pain: 5,
      description: 'Боль в коленях',
    },
  ];

  const config = {
    padding: 'auto',
    forceFit: true,
    data,
    xField: 'date',
    yField: 'pain',
    smooth: false,
    meta: {
      pain: {
        alias: 'Шкала боли',
      },
      date: {
        alias: 'Значение',
      },
    },
  };

  // useEffect(async () => {
  //   const id = 'privet';
  //   const response = await fetch(`/patient/${id}/pain`, {
  //     method: 'GET',
  //   });
  //   const result = await response.json();
  //   console.log(result);
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const description = event.target.description.value;
    console.log(date, description, pain);
  };

  return (
    <div>
      <Container style={cont} className="pain-container" fluid="md">
        <Row style={{ marginTop: '20px', color: '#047B7C' }}>
          <Col>
            <h1 style={headers} className="text-center">
              Дневник Боли
            </h1>
            <hr
              style={{
                width: '60%',
                marginLeft: '20%',
                marginRight: '20%',
                height: '1px',
                background: '#fff',
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={1} sm={4} md={5}>
            <Form onSubmit={handleSubmit}>
              <Form.Label>Дата</Form.Label>
              <Form.Group controlId="formDate">
                <Form.Control
                  name="date"
                  value={date}
                  type="text"
                  placeholder="Дата"
                  onChange={(date) => setDate(date.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Описание Боли</Form.Label>
                <Form.Control
                  name="description"
                  value={description}
                  type="text"
                  placeholder="Описание"
                  onChange={(description) =>
                    setDescription(description.target.value)
                  }
                  required
                />
                {
                  <RangeSlider
                    name="pain"
                    max="10"
                    tooltip="on"
                    variant="success"
                    value={pain}
                    onChange={(pain) => setPain(+pain.target.value)}
                  />
                }
              </Form.Group>
              <Button variant="success" type="submit">
                Добавить
              </Button>
            </Form>
          </Col>
        </Row>
        <Table style={table} striped bordered hover className="table-container">
          <thead>
            <tr>
              <th>Дата</th>
              <th>Описание</th>
              <th>Шкала Боли</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-success">
              <td>{date}</td>
              <td>{description}</td>
              <td>{pain}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Row className="m-4 justify-content-center">
        <Col xs={8}>
          <h3 style={headers} className="text-center">Динамика Боли</h3>
          <LineChart {...config} />
        </Col>
      </Row>
    </div>
  );
};

export default PainCalendar;
