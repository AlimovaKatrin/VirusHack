import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as pdfMake from 'pdfmake/build/pdfmake';
const pdfMakeX = require('pdfmake/build/pdfmake.js');
const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Татьяна',
      surname: 'Пельтцер',
      age: 73,
      sex: 'Женщина',
      phone: '8954557896',
      photo: '../img/patient1.png',
      diagnosis: 'Падения',
      graphics: '../img/pain20200503.jpg',
    };
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
            { text: `Карточка пациента`,
              style: 'subheader' },
            { text: `${this.state.name} ${this.state.surname}
              `, style: 'header'  },
             { alignment: 'justify',
              columns: [
                {
                  text: `
                         Возраст: ${this.state.age} 
                         Пол: ${this.state.sex} 
                         Телефон: ${this.state.phone} 
                         `,
                  style: 'main'
                },
                { image: dataUrl,
                  width: 150 }              
                ],
            },
            { text: `Диагноз
              `, style: 'subheader' },
            { text: `${this.state.diagnosis}`,
              style: 'main' },
            { text: `График боли
              `, style: 'subheader' },
            { image: graphsUrl,
              width: 500 },

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

  render() {
    return (<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width='360px' src="https://342031.selcdn.ru/rusplt/1733/2223/Pel_ttserGL.png" />
      <Card.Body>
        <Card.Title>Татьяна Пельтцер</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">73 года</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
    </Card.Text>
        <Button variant="secondary" size="lg" active>Go somewhere</Button>
        <Button
          variant="primary"
          onClick={this.savePdf}
        >
          Скачать pdf
    </Button>


      </Card.Body>
    </Card>)

  }
}

export default Profile
