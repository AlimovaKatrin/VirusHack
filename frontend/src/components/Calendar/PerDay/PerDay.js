
import React, { useCallback, useRef, useEffect, useState } from "react";
import { render } from "react-dom";

import { Card,ListGroup } from 'react-bootstrap'

export default function ClendarPerDay(props) {
console.log( new Date(new Date().setHours(new Date().getHours())));
const {color} = props 
  return (
    <>
<Card bg={color} style={{ width: '18rem' }}>
  <Card.Header >Featured</Card.Header>
  <ListGroup>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>

    </>
  );
}
// view={'day'}