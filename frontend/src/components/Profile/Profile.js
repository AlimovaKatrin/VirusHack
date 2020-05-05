import React, { Component } from 'react';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { Link } from 'react-router-dom'

import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux';

import ShortCard from './ShortPatientCard/ShortPatientCard'

class Profile extends Component {
  componentDidMount() {
    if (!this.props.state.user) this.props.history.push('/login')
  }

  render() {
    const { patients } = this.props.state.user
  console.log(this.props);
  
    return (<Container fluid>

      <Row>
        <br></br>
          {patients ? patients.map(person => { return (<Col><br/><ShortCard key={person._id} person={person} /></Col>) }) : <div>Вы можете добавить пациетна</div>}
        <Col xs={2}>
          <ListGroup>
            <Button as={Link} to="/contacts" style={{color:"black", backgroundColor: "#ebd7d1" }}><img src="https://img.icons8.com/ios/50/000000/warning-shield.png"/><br></br>Телефоны горячих линий</Button>
            <Button as={Link} to="/contacts" style={{color:"black", backgroundColor: "#EAEFF6" }}><img src="https://img.icons8.com/ios/50/000000/phone.png"/><br></br>Телефоны патронажных служб</Button>
            <Button as={Link} to="/create-patient" size="lg" variant="warning"><img src="https://img.icons8.com/ios/50/000000/plus.png" /><br></br>Добавить пациента</Button>

          </ListGroup>
        </Col>
      </Row>
    </Container>)

  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Profile);
