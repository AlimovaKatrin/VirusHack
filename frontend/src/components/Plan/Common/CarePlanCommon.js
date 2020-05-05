import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import ClendarPerWeek from '../../Calendar/PerWeek/PerWeek';
import ClendarPerDay from '../../Calendar/PerDay/PerDay';

import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class CarePlanCommon extends Component {
    componentDidMount() {
        if (!this.props.state.user) this.props.history.push('/login')
      }
      
    render() {
        if(!this.props.state.user) {this.props.history.push('/login')}

        const headers = {
            color: '#047B7C',
          }
        return (
            <div>
                <Container className="mt-2">
                <h1 style={headers} className="text-center">
              План Ухода
            </h1>
                    <Row>
                        <Col sm={10}><ClendarPerWeek prop={this.props}/></Col>
                        <Col sm={1}>
                            <ClendarPerDay />
                            <br></br>
                            <ClendarPerDay color="#047B7C" />
                            <br></br>
                            <ClendarPerDay />
                            <br></br>
                            <Button as={Link} size="lg" variant='warning' style={{ width: '18rem' }}><img src="https://img.icons8.com/android/24/000000/treatment-plan.png"/> План на день </Button>
                            
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(CarePlanCommon);