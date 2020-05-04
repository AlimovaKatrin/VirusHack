import React, { Component } from 'react'
import styles from './Card.module.css'
import {
  Container, Row, Col, Image, ButtonGroup, Button, Card, CardDeck, Table
} from 'react-bootstrap';

export class PatientCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
  }

  // componentDidMount() {
  //   const response = await fetch(`/patient/${id}`, {
  //     method: 'GET'
  //   })
  //   const result = await response.json();
  //   console.log(result);
  // };

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

        <Container style={{ border: "3px solid lightgrey" }}>

          <Row style={{ marginTop: '20px', color: "#047B7C" }}>
            <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Расширенная карточка пациента</h1>
              <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
            </Col>
          </Row>

          <Row style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardDeck>

              <Card style={{ width: '330px' }}>
                <Card.Img src='https://memepedia.ru/wp-content/uploads/2016/03/large_p19d7nh1hm1i37tnuim11ebqo5c1.jpg' />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
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
                    <td>Мага</td>
                    <td>Магомедович</td>
                    <td>Мужчина</td>
                    <td >90</td>
                    <td>Россия, 123456, Санкт-Петербург, пр. Вознесения д.6 кв.23</td>
                    <td>+7(999)000-00</td>
                  </tr>
                </tbody>
              </Table>
              <Card.Title style={{ textAlign: 'center', color: "#047B7C", marginTop: '20px' }}>Диагноз</Card.Title>
              <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
              <Card.Text style={{ marginLeft: '10px', marginRight: '10px', marginBottom: '10px' }}>
                Гастроэзофагеальная рефлюксная болезнь, эрозивная форма (степень С), осложненное течение (К21.0). Язва абдоминального отдела пищевода.
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
              <Button variant="secondary" style={{ backgroundColor: "#047B7C", marginLeft: 'auto', marginRight: 'auto', display: 'block' }} size="mg" active>Выгрузка в PDF</Button>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default PatientCard;

