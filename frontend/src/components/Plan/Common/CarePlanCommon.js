import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClendarPerWeek from '../../Calendar/PerWeek/PerWeek';
import ClendarPerDay from '../../Calendar/PerDay/PerDay';

import { Container, Row, Col } from 'react-bootstrap';
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
                        <Col sm={4}>sm=4</Col>
                    </Row>
                    <Row>
                        <Col sm><ClendarPerDay /></Col>
                        <Col sm><ClendarPerDay color='warning'/></Col>
                        <Col sm><ClendarPerDay /></Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(CarePlanCommon);