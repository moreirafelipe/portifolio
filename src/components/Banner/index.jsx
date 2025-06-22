import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import TypewriterComponent from 'typewriter-effect';
import downArrowSVG from '../../assets/icons/down-buttom.svg'

import Grid from '../Grid/grid';
import { preloadImages } from '../../utils/utils';

import webSVG from '../../assets/icons/web.svg';
import enginnerSVG from '../../assets/icons/engineer.svg';
import languageSVG from '../../assets/icons/language.svg';
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
    <div id="start" className='container-banner content'>
      <div className="grid">
        <div className="grid__item pos-1"><div className="grid-item-words" >About</div></div>
        <div className="grid__item pos-2"><div className="grid-item-words" >Projects</div></div>
        <div className="grid__item pos-3"><div className="grid-item-words"></div>Hard skills</div>
        <div className="grid__item pos-4"><div className="grid-item-words">Data</div></div>
        <div className="grid__item pos-5"><div className="grid-item-words">AI</div></div>
        <div className="grid__item pos-6"><div className="grid-item-img">Cloud</div></div>
        <div className="grid__item pos-7"><div className="grid-item-words">DataOps</div></div>
        <div className="grid__item pos-8"><div className="grid-item-words">Data Quality</div></div>
        <div className="grid__item pos-9"><div className="grid-item-words">Big Data</div></div>
        <div className="grid__item pos-10"><div className="grid-item-words">Architecture</div></div>
      </div>

      <Row className="d-flex justify-content-between align-items-center mt-5 pt-5 w-100 text-center content__title no-select">
        <Col className='container-text text-center display-6 mt-5 pt-2' xs={12} md={12}>

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
                  .typeString(`a Data Engineer <img src=${webSVG} alt="developer">`)
                  .pauseFor(1000)
                  .deleteChars(16)

                  .typeString(`a Certified English speaker <img src=${languageSVG} alt="languages">`)
                  .pauseFor(1000)
                  .deleteChars(28)

                  .typeString(`a Data Architecture student <img className="" src=${enginnerSVG} alt="engineer">`)
                  .pauseFor(1000)
                  .deleteChars(28)

                  .typeString("a Platform Engineer!")
                  .typeString(`<br><img src=${webSVG} alt="developer">`)
                  .typeString(`<img src=${languageSVG} alt="developer">`)
                  .typeString(`<img src=${enginnerSVG} alt="developer">`)

                  .typeString(`<br><br>Check out my projects <a href="#projects"><img src=${downArrowSVG}></a>`)
                  .start();
              }}
            />
          </span>
        </Col>
      </Row>
    </div >
  )
}