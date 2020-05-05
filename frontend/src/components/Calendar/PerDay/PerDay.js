
import React from "react";

import { Card,ListGroup } from 'react-bootstrap'

export default function ClendarPerDay(props) {
const {color} = props 
  return (
    <>
<Card style={{ width: '18rem' , backgroundColor: color }}>
  <Card.Header >Дата</Card.Header>
  <ListGroup>
    <ListGroup.Item>Важные данные</ListGroup.Item>
    <ListGroup.Item>Лекарства</ListGroup.Item>
    <ListGroup.Item>События</ListGroup.Item>
  </ListGroup>
</Card>

    </>
  );
}
