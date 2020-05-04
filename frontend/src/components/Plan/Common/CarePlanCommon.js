import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import ClendarPerWeek from '../../Calendar/PerWeek/PerWeek';
import ClendarPerDay from '../../Calendar/PerDay/PerDay';

import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class CarePlanCommon extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>План ухода</h1>
                <Container>
                    <Row>
                        <Col sm={10}><ClendarPerWeek /></Col>
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