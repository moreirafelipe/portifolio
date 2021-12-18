import { Container, Row, Col } from 'react-bootstrap';
import TypewriterComponent from 'typewriter-effect';
import profile from '../../assets/photos/profile.png';

import webSVG from '../../assets/icons/web.svg';
import enginnerSVG from '../../assets/icons/engineer.svg';
import languageSVG from '../../assets/icons/language.svg';

import './styles.scss';

export default function Banner() {
  return (
    <Container className='container-banner'>
      <Row className="d-flex justify-content-around align-items-center mt-5 pt-5 w-100 text-center">
        <Col className='container-text text-center display-6 mt-4 pt-2' xs={12} md={6}>
          <TypewriterComponent

            onInit={(typewriter) => {

              typewriter
                .typeString("Welcome!")
                .pauseFor(1000)

                .typeString("<br>My name is Felipe!")
                .pauseFor(1000)

                .typeString("<br>I'm ")
                .typeString(`Full-stack developer <img src=${webSVG} alt="developer">`)
                .pauseFor(1000)
                .deleteChars(21)

                .typeString(`Languages student <img src=${languageSVG} alt="languages">`)
                .pauseFor(1000)
                .deleteChars(18)

                .typeString(`Engineering student <img src=${enginnerSVG} alt="engineer">`)
                .pauseFor(1000)
                .deleteChars(20)

                .typeString("Software engineer!")
                .typeString(`<br><img src=${webSVG} alt="developer">`)
                .typeString(`<img src=${languageSVG} alt="developer">`)
                .typeString(`<img src=${enginnerSVG} alt="developer">`)
                .start();
            }}
          />

        </Col>

        <Col className='container-profile mt-5 pt-2' xs={12} md={6}>
          <img className='animages' src={profile} alt={"profile"} />
        </Col>
      </Row>
    </Container>
  )
}