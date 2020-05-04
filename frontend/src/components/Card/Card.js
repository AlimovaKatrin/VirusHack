import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import styles from './Card.module.css'
import {
  Container, Row, Col, Image, Button, Card, CardDeck, Table, Form, FormControl, ListGroup
} from 'react-bootstrap';

import * as pdfMake from 'pdfmake/build/pdfmake';

const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;

export class PatientCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      name: '',
      surname: '',
      age: null,
      sex: '',
      phone: '',
      photo: '',
      diagnosis: '../img/patient1.png',
      graphics: '../img/pain20200503.jpg',
      doctor: ''
    }
  }
  componentDidMount() {
    if (!this.props.state.user) this.props.history.push('/login')
    const { patients } = this.props.state.user;
    const { id } = this.props.match.params;
    const patient = patients.filter(el => el._id === id);
    console.log(patient);
    this.setState({
      name: patient[0].name,
      surname: patient[0].surname,
      age: patient[0].age,
      sex: patient[0].sex,
      phone: patient[0].phone,
      address: patient[0].address,
      photo: '../img/patient1.png',
      diagnosis: patient[0].diagnosis,
      graphics: '../img/pain20200503.jpg',
      doctor: patient[0].doctor
    })
  }

  savePdf = async () => {
    const toDataURL = url => fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      }))

    let graphsUrl = await toDataURL(this.state.graphics)
    let data = toDataURL(this.state.photo)

      .then(dataUrl => {
        const docDefinition = {
          content: [
            {
              text: `Карточка пациента`,
              style: 'subheader'
            },
            {
              text: `${this.state.name} ${this.state.surname}
              `, style: 'header'
            },
            {
              alignment: 'justify',
              columns: [
                {
                  text: `
                  Возраст: ${this.state.age} 
                  Пол: ${this.state.sex} 
                  Телефон: ${this.state.phone} 
                  `,
                  style: 'main'
                },
                {
                  image: dataUrl,
                  width: 150
                }
              ],
            },
            {
              text: `Диагноз
              `, style: 'subheader'
            },
            {
              text: `${this.state.diagnosis}`,
              style: 'main'
            },
            {
              text: `График боли
              `, style: 'subheader'
            },
            {
              image: graphsUrl,
              width: 500
            },

          ],
          styles: {
            header: {
              fontSize: 24,
              alignment: 'center',
              bold: true,
            },
            subheader: {
              fontSize: 18,
              alignment: 'center',
              bold: true,
            },
            main: {
              fontSize: 14,
              alignment: 'left'
            }
          }
        };

        let today = new Date().toISOString().slice(0, 10)
        let filename = this.state.surname + this.state.name[0] + '_' + today
        pdfMake.createPdf(docDefinition).download(`${filename}.pdf`);
      }
      )
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
    // console.log(this.props);

    return (
      <div>

        <Row>
          <br></br>
          <Col xs={10}>
            <Container style={{ border: "3px solid lightgrey" }}>

              <Row style={{ marginTop: '20px', color: "#047B7C" }}>
                <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Расширенная карточка пациента</h1>
                  <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
                </Col>
              </Row>

              <Row style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CardDeck>

                  <Card style={{ width: '330px' }}>
                    <Form onSubmit={this.onSubmitHandler}>
                      <FormControl type="file" name="file" onChange={this.onChangeHandler} />
                      <Button type="submit" variant="secondary" style={{ backgroundColor: "#047B7C", display: 'block' }} size="mg" active>Загрузить фото</Button>
                    </Form>
                    {this.state.file ? <img src={this.state.file.imageUrl} /> : null}
                    {/* <Card.Img src='https://memepedia.ru/wp-content/uploads/2016/03/large_p19d7nh1hm1i37tnuim11ebqo5c1.jpg' /> */}
                    <Card.ImgOverlay>
                    </Card.ImgOverlay>
                  </Card>

                  <Card>
                    <Card.Body style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }}>
                      <Card.Title>Ответственный за пациента</Card.Title>
                      <Card.Text>
                        ФИО: Марья Ивановна<br />
                    Телефон: +7(777)777-77<br />
                      </Card.Text>
                      <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
                      <Card.Title>Лечащий врач пациента</Card.Title>
                      <Card.Text>
                        ФИО: {this.state.doctor.doctorName} {this.state.doctor.doctorSurname}<br />
                    Телефон: +7(123)456-78<br />
                      </Card.Text>
                    </Card.Body>
                  </Card>

                </CardDeck>
              </Row>

              <Row style={{ marginTop: '20px', color: "#047B7C" }}>
                <Col><h2 style={{ textAlign: 'center', color: "#047B7C" }}>Информация о пациенте</h2>
                  <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
                </Col>
              </Row>

              <Row style={{ marginTop: '20px', marginLeft: '5px', marginRight: '5px' }}>
                <Card style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>
                  <Table striped bordered hover>
                    <thead>
                      <tr style={{ textAlign: 'center' }}>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Пол</th>
                        <th>Возраст</th>
                        <th>Адрес проживания</th>
                        <th>Телефон</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-success" style={{ textAlign: 'center' }}>
                        <td>{this.state.name}</td>
                        <td>{this.state.surname}</td>
                        <td>{this.state.sex}</td>
                        <td>{this.state.age}</td>
                        <td>{this.state.address}</td>
                        <td>{this.state.phone}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Card.Title style={{ textAlign: 'center', color: "#047B7C", marginTop: '20px' }}>Диагноз</Card.Title>
                  <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
                  <Card.Text style={{ marginLeft: '10px', marginRight: '10px', marginBottom: '10px', textAlign: 'center' }}>
                    {this.state.diagnosis}
                  </Card.Text>
                </Card>
              </Row>

              <Row style={{ marginTop: '20px', color: "#047B7C" }}>
                <Col><h2 style={{ textAlign: 'center', color: "#047B7C" }}>Панель управления</h2>
                  <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
                </Col>
              </Row>

              <Row style={{ marginBottom: '20px' }}>
                <Col>
                  <Button variant="secondary" style={{ backgroundColor: "#047B7C", marginLeft: 'auto', marginRight: 'auto', display: 'block' }} size="mg" active>Дневник боли</Button>
                </Col>
                <Col>
                  <Button variant="secondary" style={{ backgroundColor: "#047B7C", marginLeft: 'auto', marginRight: 'auto', display: 'block' }} size="mg" active>План ухода</Button>
                </Col>
                <Col>
                  <Button onClick={this.savePdf} variant="secondary" style={{ backgroundColor: "#047B7C", marginLeft: 'auto', marginRight: 'auto', display: 'block' }} size="mg" active>Скачать PDF</Button>
                </Col>
              </Row>
            </Container>
          </Col>

          <Col>
            <ListGroup>
              <ListGroup.Item>Важные ссылки</ListGroup.Item>
              <Button as={Link} to="/contacts" style={{ color: "black", backgroundColor: "#EAEFF6" }}><img src="https://img.icons8.com/ios/50/000000/notification-center.png"/><br></br>Памятки</Button>
              <Button as={Link} to="/contacts" style={{ color: "black", backgroundColor: "#ebd7d1" }}><img src="https://img.icons8.com/ios/50/000000/phone.png" /><br></br>Телефоны патронажных служб</Button>
              <Button as={Link} to="/contacts" style={{ color: "black", backgroundColor: "#E96A3C" }}><img src="https://img.icons8.com/ios/50/000000/warning-shield.png" /><br></br>Телефоны горячих линий</Button>
              <Button as={Link} to={`/${this.props.match.params.id}/maps`} style={{ backgroundColor: "#44A8A8" }}><img src="https://img.icons8.com/ios/50/000000/waypoint-map.png" /><br></br>Адреса аптек</Button>

            </ListGroup>
          </Col>
        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(PatientCard);

