import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import TypewriterComponent from 'typewriter-effect';
import downArrowSVG from '../../assets/icons/down-buttom.svg'

import Grid from '../Grid/grid';
import { preloadImages } from '../../utils/utils';

import cloudSVG from '../../assets/icons/cloud.svg';
import engineerSVG from '../../assets/icons/engineer.svg';
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
        <div className="grid__item pos-1"><div className="grid-item-words" >DevOps</div></div>
        <div className="grid__item pos-2"><div className="grid-item-words" >Cloud</div></div>
        <div className="grid__item pos-3"><div className="grid-item-words"></div>Datavis</div>
        <div className="grid__item pos-4"><div className="grid-item-words">Pipelines</div></div>
        <div className="grid__item pos-5"><div className="grid-item-words">AI</div></div>
        <div className="grid__item pos-6"><div className="grid-item-words"></div>SRE</div>
        <div className="grid__item pos-7"><div className="grid-item-words">DataOps</div></div>
        <div className="grid__item pos-8"><div className="grid-item-words">Quality</div></div>
        <div className="grid__item pos-9"><div className="grid-item-words">Big Data</div></div>
        <div className="grid__item pos-10"><div className="grid-item-words">Architecture</div></div>
      </div>

      <Row className="d-flex justify-content-between align-items-center mt-5 pt-5 w-100 text-center content__title no-select">
        <Col className='container-text text-center display-6 mt-2 pt-2' xs={12} md={12}>

          <span id="text-writing">
            <TypewriterComponent

              onInit={(typewriter) => {

                typewriter
                  .typeString("<br>Hi, my name is Felipe!")
                  .pauseFor(700)

                  .changeDeleteSpeed(.5)
                  /* 
                                    .typeString("<br>I'm ")
                                    .typeString(`a Data Engineer <img src=${engineerSVG} alt="developer">`)
                                    .pauseFor(700)
                                    .deleteChars(16) */

                  .typeString("<br>I'm ")
                  .typeString(`a certified english speaker <img src=${languageSVG} alt="languages">`)
                  .pauseFor(700)
                  .deleteChars(28)

                  .typeString(`a data architecture student <img className="" src=${cloudSVG} alt="engineer">`)
                  .pauseFor(700)
                  .deleteChars(28)

                  .typeString("a Data Engineer!")
                  /* .typeString(`<br><img src=${engineerSVG} alt="engineering">`) */
                  .typeString(`<br><img src=${languageSVG} alt="developer">`)
                  .typeString(`<img src=${cloudSVG} alt="developer">`)

                  .typeString(`<br>Check out my projects`)
                  .typeString(`<br><a href="#projects"><img src=${downArrowSVG}></a>`)
                  .start();
              }}
            />
          </span>
        </Col>
      </Row>
    </div >
  )
}