import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from './logocarni.png';

function ShapeExample() {
  return (
    <Container>
      <Row className='justify-content-center align-items-center'>
        
        <Col xs={6} md={4}>
          <Image src={logo} roundedCircle />
        </Col>
        
      </Row>
    </Container>
  );
}

export default ShapeExample;