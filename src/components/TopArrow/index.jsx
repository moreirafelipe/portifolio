import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './styles.scss'

const TopArrow = () => {
  const [topArrow, setTopArrow] = useState(false);

  const changeButtomState = () => {
    if (window.scrollY >= 100) {
      setTopArrow(true);
    }
    else {
      setTopArrow(false);
    }
  };

  window.addEventListener('scroll', changeButtomState);

  return (
    <Container id={topArrow ? "back-buttom" : "hidden-buttom"} className='container-buttom content'>
      <Row className="row-up-arrow">
        <Col className='col-up-arrow text-center display-6 ca3-scroll-up-link ca3-scroll-up-arrow mt-4 pt-2' data-ca3_iconfont="ETmodules" data-ca3_icon="" xs={12} md={12}>
          <Link to={"#start"} className="ca3-scroll-up-link ca3-scroll-up-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></Link>
        </Col>
      </Row>
    </Container >
  )
}

export default TopArrow;