import React, { Component } from 'react'
import styles from './Card.module.css'
import {
  Container, Row, Col, Image, ButtonGroup, Button
} from 'react-bootstrap';

export class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  }

  onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', this.state.file);
    const response = await fetch('/patient/upload', {
      method: 'POST',
      body: data,
    });
    const imageUrl = await response.json();
    this.setState({
      file: imageUrl,
    });
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.onSubmitHandler}>
          <input type="file" name="file" onChange={this.onChangeHandler} />
          <button type='submit'>Upload</button>
        </form>
        {this.state.file ? <img src={this.state.file.imageUrl} /> : null} */}

        <Container style={{ border: "3px solid lightgrey", textAlign: "center", width: "700px" }}>
          <Row>
            <Col>
              <Image src="https://memepedia.ru/wp-content/uploads/2016/03/large_p19d7nh1hm1i37tnuim11ebqo5c1.jpg" style={{ width: '150px', height: '150px' }} roundedCircle />
            </Col>
            <Col>
              <h3>Сиделка</h3>
              <h3>Врач</h3>
            </Col>
          </Row>
          <Row>
            <Col>Info</Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" style={{ backgroundColor: "#047B7C" }} size="mg" active>Дневник боли</Button>
            </Col>
            <Col>
              <Button variant="secondary" style={{ backgroundColor: "#047B7C" }} size="mg" active>План ухода</Button>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default Card

