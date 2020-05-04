import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col,Button } from 'react-bootstrap'
import { connect } from 'react-redux';

import ShortCard from './ShortPatientCard/ShortPatientCard'
//   получить пациента /patient GET
class Profile extends Component {
  componentWillMount(){
    if(!this.props.state.user)this.props.history.push('/login')
  }

  render() {
    return (
<<<<<<< Updated upstream

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" width='360px' src="https://342031.selcdn.ru/rusplt/1733/2223/Pel_ttserGL.png" rounded />
        <Card.Body>
          <Card.Title style={{ color: "#047B7C" }}>Татьяна Пельтцер</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">73 года</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" style={{ backgroundColor: "#047B7C" }} size="mg" active>Дневник боли</Button>
            <Button variant="secondary" style={{ backgroundColor: "#047B7C" }} size="mg" active>План ухода</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>



=======
      <Container fluid>
        <br></br>
        <Row>
          <Col><ShortCard /></Col>
          <Col><Button as={Link} to="/create-patient" variant="warning"><img src="https://img.icons8.com/ios/50/000000/plus.png"/><br></br>Добавить пациента</Button></Col>

        </Row>
        <br></br>
     
      
      </Container>
>>>>>>> Stashed changes
    )

  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Profile);
