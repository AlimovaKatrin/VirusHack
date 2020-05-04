import React, { Component } from 'react'
import styles from './Card.module.css'
import {
  Container, Row, Col, Image, Button, Card, CardDeck, Table, Form, FormControl
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { recieveUserAC } from '../../redux/action-creator'

import * as pdfMake from 'pdfmake/build/pdfmake';
const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;

const ImageForm = ({ onSubmitHandler, onChangeHandler }) => {
  return (
    <Form onSubmit={onSubmitHandler}>
      <FormControl type="file" name="file" onChange={onChangeHandler} />
      <Button type="submit" variant="secondary" style={{ backgroundColor: "#047B7C", display: 'block' }} size="mg" active>Загрузить фото</Button>
    </Form>
  )
}

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
      photo: null,
      diagnosis: '',
      graphics: '../img/pain20200503.jpg',
    }
  }

  componentDidMount() {
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
      photo: patient[0].image,
      diagnosis: patient[0].diagnosis,
      graphics: '../img/pain20200503.jpg',
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

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const userId = this.props.state.user._id;
    const data = new FormData();
    data.append('file', this.state.file);
    const response = fetch(`/patient/upload`, {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(imageUrl => fetch(`/patient/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: imageUrl.imageUrl, id, userId })
      }))
      .then(res => res.json())
      .then(user => this.props.updateUser(user))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);

    return (
      <div>

        <Container style={{ border: "3px solid lightgrey" }}>

          <Row style={{ marginTop: '20px', color: "#047B7C" }}>
            <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Расширенная карточка пациента</h1>
              <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
            </Col>
          </Row>

          <Row style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardDeck>

              <Card style={{ width: '330px' }}>
                {this.state.photo ? <Card.Img src={this.state.photo} /> : <ImageForm onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} />}
              </Card>

              <Card>
                <Card.Body style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }}>
                  <Card.Title>Ответственный за пациента</Card.Title>
                  <Card.Text>
                    ФИО: Марь Ивановна<br />
                    Телефон: +7(777)777-77<br />
                  </Card.Text>
                  <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
                  <Card.Title>Лечащий врач пациента</Card.Title>
                  <Card.Text>
                    ФИО: Доктор Айболит<br />
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

      </div>
    )
  }
}

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({ updateUser: (user) => dispatch(recieveUserAC(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(PatientCard);

