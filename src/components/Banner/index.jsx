import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

import TypewriterComponent from 'typewriter-effect';
import TopArrow from '../TopArrow';
import downArrowSVG from '../../assets/icons/down-buttom.svg'

import Grid from '../Grid/grid';
import { preloadImages } from '../../utils/utils';

import webSVG from '../../assets/icons/web.svg';
import enginnerSVG from '../../assets/icons/engineer.svg';
import languageSVG from '../../assets/icons/language.svg';

import amarFront from '../../assets/images/projects/amar-e-cuidar-front.png';
import amarBack from '../../assets/images/projects/amar-e-cuidar-back.png';
import odontoclinic from '../../assets/images/projects/odontoclinic.png';
import memoryfighter from '../../assets/images/projects/memoryfighter.png';
import profilePhoto from '../../assets/images/projects/profile.jpg';
import travelsbook from '../../assets/images/projects/travelsbook.png';
import todolist from '../../assets/images/projects/todolist.png';
import univesp from '../../assets/images/projects/univesp.png';
import trainiing from '../../assets/images/projects/trainiing.png';
import calculadora from '../../assets/images/projects/calculadora.png';

import './styles.scss';

export function Banner() {

  useEffect(() => {

    // Preload  images
    preloadImages('.grid__item-img, .bigimg').then(() => {
      // Remove loader (loading class)
      document.body.classList.remove('loading');

      // Initialize grid
      const grid = new Grid(document.querySelector('.grid'));
    });
  })

  return (
    <Container id="start" className='container-banner content'>
      <div className="grid">
        <div className="grid__item pos-1"><div className="grid__item-img" style={{ backgroundImage: `url(${travelsbook})` }}></div></div>
        <div className="grid__item pos-2"><div className="grid__item-img" style={{ backgroundImage: `url(${univesp})` }}></div></div>
        <div className="grid__item pos-3"><div className="grid__item-img" style={{ backgroundImage: `url(${odontoclinic})` }}></div></div>
        <div className="grid__item pos-4"><div className="grid__item-img" style={{ backgroundImage: `url(${amarFront})` }}></div></div>
        <div className="grid__item pos-5"><div className="grid__item-img" style={{ backgroundImage: `url(${profilePhoto})` }}></div></div>
        <div className="grid__item pos-6"><div className="grid__item-img" style={{ backgroundImage: `url(${trainiing})` }}></div></div>
        <div className="grid__item pos-7"><div className="grid__item-img" style={{ backgroundImage: `url(${todolist})` }}></div></div>
        <div className="grid__item pos-8"><div className="grid__item-img" style={{ backgroundImage: `url(${calculadora})` }}></div></div>
        <div className="grid__item pos-9"><div className="grid__item-img" style={{ backgroundImage: `url(${amarBack})` }}></div></div>
        <div className="grid__item pos-10"><div className="grid__item-img" style={{ backgroundImage: `url(${memoryfighter})` }}></div></div>
      </div>

      <Row className="d-flex justify-content-around align-items-center mt-5 pt-2 w-100 text-center content__title no-select">
        <Col className='container-text text-center display-6 mt-4 pt-2' xs={12} md={12}>

          <span id="text-writing">
            <TypewriterComponent

              onInit={(typewriter) => {

                typewriter
                  .typeString("Welcome!")
                  .pauseFor(1000)

                  .typeString("<br>My name is Felipe!")
                  .pauseFor(1000)

                  .changeDeleteSpeed(.5)

                  .typeString("<br>I'm ")
                  .typeString(`a Full-stack developer <img src=${webSVG} alt="developer">`)
                  .pauseFor(1000)
                  .deleteChars(23)

                  .typeString(`a Languages student <img src=${languageSVG} alt="languages">`)
                  .pauseFor(1000)
                  .deleteChars(20)

                  .typeString(`an Engineering student <img className="" src=${enginnerSVG} alt="engineer">`)
                  .pauseFor(1000)
                  .deleteChars(23)

                  .typeString("a Software Engineer!")
                  .typeString(`<br><img src=${webSVG} alt="developer">`)
                  .typeString(`<img src=${languageSVG} alt="developer">`)
                  .typeString(`<img src=${enginnerSVG} alt="developer">`)

                  .typeString(`<br><br>Check my work bellow <a href="#projects"><img src=${downArrowSVG}></a>`)
                  .start();
              }}
            />
          </span>
        </Col>
      </Row>
    </Container >
  )
}