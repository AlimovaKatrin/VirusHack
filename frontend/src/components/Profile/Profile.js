import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class Profile extends Component {


render() {
  return (
  
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" width='360px' src="https://342031.selcdn.ru/rusplt/1733/2223/Pel_ttserGL.png" rounded />
  <Card.Body>
    <Card.Title style={{color: "#047B7C"}}>Татьяна Пельтцер</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">73 года</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <ButtonGroup aria-label="Basic example">
    <Button variant="secondary"  style={{backgroundColor: "#047B7C"}} size="mg" active>Дневник боли</Button>
    <Button variant="secondary" style={{backgroundColor: "#047B7C"}} size="mg" active>План ухода</Button>
    </ButtonGroup>
  </Card.Body>
</Card>



)

}
}

export default Profile


