import Carousel from "react-multi-carousel";
import { Container, Row, Col } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import { Item } from '../Item';
import Quote from '../Quote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//Importando estilos
import './styles.scss'

//Function component que exporta o componentcarousel
export function About() {

  //Iterando array de dados e retornando componentes que contém os cards como props children
  return (
    <div id="about" className="d-flex w-100 pt-5 justify-content-around align-items-start text-light">
      <div className="row d-flex flex-row flex-wrap justify-content-around align-items-start mt-2 pt-5">
        <h3 className="display-3  text-center">Nice to meet you!</h3>
        <div className="col-12 d-flex mt-1 flex-row flex-wrap justify-content-around align-items-start fs-6">
          <p className="col-12 col-md-9 mt-2">I'm Felipe Moreira, a Systems Analyst who lives in São Paulo, Brazil.
          </p>
          <p>I'm' experienced in the IT, Telecom and CCTV infrastructure support area, and I'm also capable of developing and maintaining cross-platform applications.</p>
          <p>
            Since 2009, I've built my career providing technical support for Proxy and Data Base servers, delivering systems integrations between Marketing and chatbots platforms and, from 2020 until now, I've been studying and developing cloud based applications, mainly using React Js, Java and AWS, in Digital House's Certified Tech Developer training.
          </p>
        </div>
        <div className="col-12 text-center mt-2">
          <h2>Let's stay in touch!</h2>
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