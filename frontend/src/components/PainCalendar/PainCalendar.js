import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

 
import "react-datepicker/dist/react-datepicker.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const slider = {
  width: '30%',
  marginTop: '100px',
  padding: '10px',
};

const PainCalendar = () => {
  const [pain, setPain] = useState(0);
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const description = event.target.description.value;
    console.log(date, description, pain);
  };

  return (
    <div>
      <Container style={slider} className="pain-container">
        <Form onSubmit={handleSubmit}>
          <Form.Label>Дата</Form.Label>
          <Form.Group controlId="formDate">
            <Form.Control
              name="date"
              value={date}
              type="date"
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
          <Button variant="outline-success" type="submit">
            Добавить
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default PainCalendar;
