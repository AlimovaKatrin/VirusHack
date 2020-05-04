import React, { Component } from 'react'
import {
  Container, Row, Col, Image, ButtonGroup, Button, Card, CardDeck, Table
} from 'react-bootstrap';

export class Contacts extends Component {

  render() {
    return (
      <Container style={{ border: "3px solid lightgrey" }}>

        <Row style={{ marginTop: '20px', color: "#047B7C" }}>
          <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Контакты горячих линий</h1>
            <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
          </Col>
        </Row>
        <Card>
          <Table striped bordered hover>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>Организация</th>
                <th>Вид помощи</th>
                <th style={{ width: '200px' }}>Телефон</th>
                <th>Доп. информация</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success" style={{ textAlign: 'center' }}>
                <td>Фонд помощи хосписам «Вера»</td>
                <td>паллиативная</td>
                <td>8-800-700-84-36</td>
                <td>круглосуточно, бесплатно</td>
              </tr>
              <tr style={{ textAlign: 'center' }}>
                <td>Детский хоспис «Дом с маяком»</td>
                <td>паллиативная</td>
                <td>8-495-649-39-49</td>
                <td>работает в Москве и Подмосковье</td>
              </tr>
              <tr className="table-success" style={{ textAlign: 'center' }}>
                <td>Благотворительный фонд «Адвита»</td>
                <td>паллиативная</td>
                <td>8-800-700-89-02</td>
                <td>круглосуточно, эл. почта palliativecarespb@gmail.com, г. Санкт-Петербург</td>
              </tr>
              <tr style={{ textAlign: 'center' }}>
                <td>Всероссийская горячая линия «Ясное утро»</td>
                <td>психологическая помощь онкологическим больным и их близким</td>
                <td>8-800-100-01-91</td>
                <td>круглосуточно, бесплатно</td>
              </tr>
              <tr className="table-success" style={{ textAlign: 'center' }}>
                <td>Единая горячая линия Росздравнадзора</td>
                <td>соблюдение прав граждан в сфере охраны здоровья</td>
                <td>8-800-550-99-03</td>
                <td>круглосуточно, бесплатно для всех регионов</td>
              </tr>
              <tr style={{ textAlign: 'center' }}>
                <td>Горячая линия «Рак победим»</td>
                <td>движение против рака</td>
                <td>8-985-765-75-32</td>
                <td>время работы с 08:00 до 13:00 по московскому времени, по будням, бесплатно</td>
              </tr>
              <tr className="table-success" style={{ textAlign: 'center' }}>
                <td>Общественная организация «АС-ТОМ»</td>
                <td>помощь стомированным людям</td>
                <td>8-800-250-23-43</td>
                <td>бесплатно для всех регионов</td>
              </tr>
              <tr style={{ textAlign: 'center' }}>
                <td>Фонд «ОРБИ»</td>
                <td>борьба с инсультом</td>
                <td>8-800-707-52-29</td>
                <td>ежедневно с 9:00 до 21:00</td>
              </tr>
              <tr className="table-success" style={{ textAlign: 'center' }}>
                <td>Общественное движение «Движение против рака»</td>
                <td>движение против рака</td>
                <td>8-985-765-75-32</td>
                <td>звонки принимаются с понедельника по пятницу с 10:00 до 12:00 и с 15:00 до 18:00 (время московское)</td>
              </tr>
              <tr style={{ textAlign: 'center' }}>
                <td>Координационный центр в Москве</td>
                <td>паллиативная</td>
                <td>8-499-940-19-48</td>
                <td>круглосуточно, бесплатно</td>
              </tr>
              <tr className="table-success" style={{ textAlign: 'center' }}>
                <td>Фонд «Семьи СМА»</td>
                <td>терапия</td>
                <td>8-977-147-42-88 </td>
                <td>будни с 9 до 18 часов по московскому времени</td>
              </tr>
              <tr style={{ textAlign: 'center' }}>
                <td>АНО «Добросердие»</td>
                <td>психологическая помощь тяжелобольным людям и их родственникам</td>
                <td>8-342-225-07-49</td>
                <td>телефонный номер принадлежит региону - Пермский край, и будет тарифицироваться в соответствии с тарифом Вашего оператора связи</td>
              </tr>
            </tbody>
          </Table>
        </Card>


      </Container>
    )
  }
}

export default Contacts;

