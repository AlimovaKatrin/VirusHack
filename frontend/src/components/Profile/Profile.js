import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import jsPDF from 'jspdf';

class Profile extends Component {


 
  savePdf = async (event) => {
    
    
    event.preventDefault();
    var doc = await new jsPDF();
    let text = 'X'.repeat(450)

    doc.text(20, 20, 'Hello world!');
    doc.text(20, 50, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');
    doc.text(20, 30, text);
    doc.save('Test.pdf');
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
