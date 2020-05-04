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
      <Container fluid>
        <br></br>
        <Row>
          <Col><ShortCard /></Col>
          <Col><Button as={Link} to="/create-patient" variant="warning"><img src="https://img.icons8.com/ios/50/000000/plus.png"/><br></br>Добавить пациента</Button></Col>

        </Row>
        <br></br>
     
      
      </Container>
    )

  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Profile);
