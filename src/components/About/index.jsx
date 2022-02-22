import { useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col } from 'react-bootstrap';

import { Item } from '../Item';
import Quote from '../Quote';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Aos lib import
import Aos from "aos";
import 'aos/dist/aos.css';

//Importando estilos
import './styles.scss'

//Function component que exporta o componentcarousel
export function About() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  //Iterando array de dados e retornando componentes que contém os cards como props children
  return (
    <div id="about" className="d-flex w-100 mt-5 pt-5 justify-content-around align-items-start text-light">
      <div className="row d-flex flex-row flex-wrap justify-content-around align-items-start mt-4 pt-4">
        <h3 data-aos="fade-up" className="display-5  text-center">Nice to meet you!</h3>
        <div data-aos="fade-up" className="col-12 d-flex mt-1 flex-row flex-wrap justify-content-around align-items-start fs-6">
          <p data-aos="fade-up" className="col-12 col-md-9 ">My name is Felipe Moreira. I'm a Systems Analyst who lives in São Paulo, Brazil.
          </p>
          <p data-aos="fade-up">
            Since 2009, I've been building my career as IT Analyst, providing technical support for IT, CCTV and Telecom infrastructure, and delivering integrations between Marketing and chatbots platforms.
          </p>
          <p data-aos="fade-up">
            From 2020 until now, I've been developing cloud based applications using React Js, Java and AWS, in Digital House's Certified Tech Developer training.
          </p>
          <p data-aos="fade-up">Then, in the beginning of 2022, I started as Data Architect providing Data Infrastrucutre support.</p>
        </div>
        <div data-aos="fade-up" className="col-12 about-contact text-center mt-2">
          <h2>So, let's stay in touch!</h2>
          <div id="contact" className="d-flex flex-row justify-content-center align-items-center mt-1 m-auto">
            <a href="https://www.linkedin.com/in/felipen20/" target={"_blank"} rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className="mx-2 h1" /></a>
            <a href="mailto:felipe.saint@gmail.com" target={"_blank"} rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} className="mx-2 h1" /></a>
            <a href="https://github.com/moreirafelipe" target={"_blank"} rel='noreferrer'><FontAwesomeIcon icon={faGithub} className="mx-2 h1" /></a>
          </div>
        </div>
      </div>

    </div>
  )
}