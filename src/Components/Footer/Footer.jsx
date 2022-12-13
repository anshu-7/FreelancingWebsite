import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Footer.css"

function Footer() {
  return (
    <Container className= "container">
      <Row>
        <Col sm={4}>Quick Links</Col>
        <Col sm={4}>Services</Col>
        <Col sm={4}>Contact</Col>
      </Row>
      <Row>
        <Col sm>Home</Col>
        <Col sm>Web Development</Col>
        <Col sm>Instagram</Col>
      </Row>
      <Row>
        <Col sm>Contact</Col>
        <Col sm>App Development</Col>
        <Col sm>LinkedIn</Col>
      </Row>
      <Row>
        <Col sm>About US</Col>
        <Col sm></Col>
        <Col sm>Facebook</Col>
      </Row>
      <Row>
        <Col sm>About US</Col>
        <Col sm></Col>
        <Col sm>Facebook</Col>
      </Row>
      <Row>
        <Col sm>About US</Col>
        <Col sm></Col>
        <Col sm>Facebook</Col>
      </Row>
    </Container>
  );
}

export default Footer;