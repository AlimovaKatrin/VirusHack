import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
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
            
<Card.Text style={{  textIndent:'30px', paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px'}}>
«Мы все когда-то состаримся, будем слабеть и болеть. Однажды — каждого из нас не станет.
Многие из нас, в том числе и я, уже знают, что болезнь, приходя в семью, затрагивает всех,
кто окружает заболевшего, — в первую очередь родителей и детей.
    </Card.Text>
    <Card.Text style={{  textIndent:'30px', paddingLeft: '20px', paddingRight: '20px'}}>
    Однажды не станет каждого из нас, но все же это невыносимо — видеть, как страдает твой
любимый и близкий человек, которого недуг порой меняет до неузнаваемости, лишает
самостоятельности, — и ты стоишь уже, кажется, не у родной, а у чужой постели.
Еще тяжелее — не знать, что делать, когда в семью приходит болезнь».
    </Card.Text>
              <Card.Text style={{  textIndent:'30px', padding:'20px',  fontSize:"14px",  textAlign: 'right'}}>
              Нюта Федермессер,<br/>
директор Центра паллиативной помощи г. Москвы,<br/>
учредитель Благотворительного фонда помощи хосписам «Вера»
    </Card.Text>
             

            </Card>
        </Row>
        <Row style={{ marginTop: '20px', color: "#047B7C" }}>
          <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Основные возможности</h1>
            <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', width: '60%', height: '1px', background: '#fff' }} />
            
          </Col>
        </Row>

        <Row style={{ marginTop: '20px' }}>
          <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/cx-d_RgxT0ERUt13QOqN4Q52st_8dwezv_UIhHsv4XijnlNQlOfXPvdyAULR9KLpSrOZJljfsybXwvicFEsGtKSVxwSJZxnjmAwQ47KhQXv1baf5KY-G9pyrMiUkX8GAlV1ipBcLzN-dPPEWl9G4bsLZmw5BWhQA-fC7vJTTH0pbTZbCr40bEUw9I6KtpsiGdtWSV6y0jZ_9UN9Umlf5OoFHB0688meFszfpWvC0zPL5RktjDBBZceAJq-_v8ElF1-kT6VeuB1LHtdmrli0DMasmqbLsDN2T5BVLjhJf4jyjZNEou5BBYEq8VG4I97CDVaOahTRYZt3cgVKcdkXht_CmUoRtvwHoC6xce-JohhFtY9-P7QIdn6u49hgIlkSJbClUEZLEp_IfjtkuNnPd9jMeCdWCyrnJ9N1m9Y9UQUl4Ow9GhsBjHaTQ8lQhZAeCzl0iQ88w_JGbdRV5EADPN10M22jWyif5CAI9QcRG5C3J16jW244tlsZnRNhL0DjojUqvluWFpjQmZqq9MiUbw8CtkqC3WucnWtndgp7HZ61AyiZDFn8xNSPntk1SHyUMWO3IQ1VcyVUhi7u8UZBBiwcx6tCHvJp3sWMNgUAwghN1jSzT2vnbmy25w6eLxKR9RtMZyxxCZC4W-lAnI7K5QSN314vaaaPMV1EwrsUs7GhbltorlGC1882otJZn=w802-h502-no" />
            <Card.Body>
              <Card.Title>Карточка ухода пациента</Card.Title>
              <Card.Text>
- Календарь с возможностью добавлять события<br/>
- Дневник боли с описанием боли и степень болезненности<br/>
- Отчет о состоянии больного
              </Card.Text>
            </Card.Body>
        
          </Card>
          <Card>
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/OJ9ILqZd6P643x7RGUH_ZiD1EIV9oxRqHCt_DcZbrWUXV1N6ob07OpvFVSZYfSDvIHnA1lTCS8GTLEC1r-6RAyBwoPLIso6fpoBP7aNUSxQh-spJPWq9U_rxqZcEVNYBlxs6eVEiq-SwiOINgH4k7IbSfcdFk0bL-lwCGz3OvgGb_ZN6fbUCM6Alp7bUUm7l7snS48TbUeflY2aCn_gEU2wTS2HZuKUELxB84NBBsu0_Y_SHWoboMNcpp7rXvi6H6CfLQdaLqidjIwZMx0wl_ZtfH8ZplNGmh6CjGNU1wyPW_-HiadZtcayLh_vFiIYH81Q6c94bnyuuyNJME2GAQQsrq4noHjxK2qHxJIOV80s6I8QPn1fPVMNE8sv_M9KFjVYtO_M06-AM66a8fNCmuw1drlePvT4nWo3nkky_UOHX5OXDrSUWtFIYqBQpubbX3G_FL_GKPTzfwD6eZT4KYO-1vuvBW1coQyxh9ziqusEZ54nY6Oo3_pX9MnO5C2YphZ21S8CZDxiGT4St-rl0DTsGylpcb_aWl56c1iQfCCEp_ncuRQnV6Mz3lV6m12IEru4TVwERB3WVGRvJhgn0h-ZbtdChM2kAWCPE_UX6u1RlDISv9ya2y5MVezoaYtwbU1YaHNNEiMEAdFMURcIa6UM90aU16NCvhpgTbDZaBZE92TOTeTszavqsVz5o=w477-h298-no" />
            <Card.Body>
              <Card.Title>Персонализированные рекомендации</Card.Title>
              <Card.Text>
              - Опрос о состоянии больного<br/>
              - Персональные рекомендации на основе опроса<br/>
              - План ухода и запланированная
возможность изменения входных данных<br/>
              </Card.Text>
            </Card.Body>
           
          </Card>
          <Card>
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/kTs52H_-NDhGaeFSGTlpj0XuXbwVXeqQEIut2uFt5aAGGuc2Uda2nSa0VXj-PgRKUReSNzdq43bxAcbTVKTk4Y6w-EI7gXsCv9LCyDWWRYZOalc3ACnb7G22DuOEXvjPifGIFiP-SokGHjWw0gU1QGBtLJbmrIOk85BLyNdZgn-P8xL4et0GNEpK2gxT7cxbDvDoUH_B5emeUb16jh6SO-EGHo7MUcKyMN3vi2REd6Y1JtlopDOJk_VLjtBBtLnR9z4yWKU8yYyNqxukPZ-hlVhsi6KuXx-BjvOUA6pwV5N5bp9emrNoA6mHdXxrXPVhV2FqY1FETwh_l8rKL55pH31JhAPFn7dcPn1pQrQi6sd_UbLueSlYOdcuLj378cP5k_SGxuTYurMYVhD9atggKK6H7BXjHBZ41N7sn0ZWXzjkGLSPXXbfZgYQAwNzP7tlvpp1awsbJYfCzUPoZrOsDg6H_56ICKBOArufuZI0HY3gSGoS-cV6HHhuxPtYNd3UMeFml0QZqZO_yrG_OEJLF1sNlXDifjhtWCMjtZXo7cUFFJWM7E65T00abUDg4MdbxV99k-gtXe-eSMgQAGPJSrlrkqvY1qs_X0zhd7aLGJfsCgOFdV0TB0f2O7avJtTu6bvbnCBKv4NXcdDfjIs09zeaqDpajfH2nj4FsdZQhqk0-GVt2QwgyOmyIOdE=w800-h500-no" />
            <Card.Body>
              <Card.Title>Обучение</Card.Title>
              <Card.Text>
              - База знаний<br/>
              - Алгоритмы действий по уходу<br/>
              - Планы ухода<br/>
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
