import React, { Component } from 'react';

import ClendarPerWeek from '../../Calendar/PerWeek/perWeek';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class CarePlanCommon extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>CarePlanCommon</h1>
                <Container>
                    <Row>
                        <Col sm={8}><ClendarPerWeek/></Col>
                        <Col sm={4}>sm=4</Col>
                    </Row>
                    <Row>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CarePlanCommon;

