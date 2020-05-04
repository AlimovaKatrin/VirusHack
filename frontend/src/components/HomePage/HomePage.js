import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class HomePage extends Component {

  render() {
    return (
      <Container>
        <Row style={{ marginTop: '20px', color: "#047B7C" }}>
          <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Мастерская заботы</h1>
            <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />

          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Card>

            <Card.Text style={{ textIndent: '30px', paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }}>
              «Мы все когда-то состаримся, будем слабеть и болеть. Однажды — каждого из нас не станет.
              Многие из нас, в том числе и я, уже знают, что болезнь, приходя в семью, затрагивает всех,
              кто окружает заболевшего, — в первую очередь родителей и детей.
    </Card.Text>
            <Card.Text style={{ textIndent: '30px', paddingLeft: '20px', paddingRight: '20px' }}>
              Однажды не станет каждого из нас, но все же это невыносимо — видеть, как страдает твой
              любимый и близкий человек, которого недуг порой меняет до неузнаваемости, лишает
              самостоятельности, — и ты стоишь уже, кажется, не у родной, а у чужой постели.
              Еще тяжелее — не знать, что делать, когда в семью приходит болезнь».
    </Card.Text>
            <Card.Text style={{ textIndent: '30px', padding: '20px', fontSize: "14px", textAlign: 'right' }}>
              Нюта Федермессер,<br />
директор Центра паллиативной помощи г. Москвы,<br />
учредитель Благотворительного фонда помощи хосписам «Вера»
    </Card.Text>


          </Card>
        </Row>
        <Row style={{ marginTop: '20px', color: "#047B7C" }}>
          <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Основные возможности</h1>
            <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />

          </Col>
        </Row>

        <Row style={{ marginTop: '20px' }}>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="../img/image002.jpg" />
              <Card.Body>
                <Card.Title>Карточка ухода пациента</Card.Title>
                <Card.Text>
                  - Календарь с возможностью добавлять события<br />
                  - Дневник боли с описанием боли и степень болезненности<br />
                  - Отчет о состоянии больного
              </Card.Text>
              </Card.Body>

            </Card>
            <Card>
            <Card.Img variant="top" src="../img/image003.jpg" />
              <Card.Body>
                <Card.Title>Персонализированные рекомендации</Card.Title>
                <Card.Text>
                  - Опрос о состоянии больного<br />
              - Персональные рекомендации на основе опроса<br />
              - План ухода и запланированная возможность изменения входных данных<br />
                </Card.Text>
              </Card.Body>

            </Card>
            <Card>
            <Card.Img variant="top" src="../img/image001.jpg" />              
            <Card.Body>
                <Card.Title>Обучение</Card.Title>
                <Card.Text>
                  - База знаний<br />
              - Алгоритмы действий по уходу<br />
              - Планы ухода<br />
                </Card.Text>
              </Card.Body>

            </Card>
          </CardDeck>
        </Row>
      </Container >
    )
  }
}

export default HomePage
