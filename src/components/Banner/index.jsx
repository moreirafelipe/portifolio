import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as SquareSVG } from '../../assets/images/banner/square.svg';
import './styles.scss';

export default function Banner() {
  return (
    <Container className='container-banner'>
      <Row>
        <Col xs={6} md={4}>
          <SquareSVG />
        </Col>
        <Col xs={6} md={4}>
          <SquareSVG id="developer-pic" />
        </Col>
        <Col xs={6} md={4}>
          <SquareSVG />
        </Col>
      </Row>
    </Container>
  )
}