import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//Aos lib import
import Aos from "aos";

//Importando estilos
import './styles.scss';
import 'aos/dist/aos.css';
import "react-multi-carousel/lib/styles.css";

//Function component que exporta o componentcarousel
export function About() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  //Iterando array de dados e retornando componentes que contém os cards como props children
  return (
    <div id="about" className="d-flex w-100 mt-5 pt-5 justify-content-around align-items-start text-light">
      <div className="row d-flex flex-row flex-wrap justify-content-around align-items-start mt-4 pt-4">
        <h3 data-aos="fade-up" className="text-center">Nice to meet you!</h3>
        <div data-aos="fade-up" className="col-12 d-flex mt-1 flex-row flex-wrap justify-content-around align-items-start fs-6">
          <p data-aos="fade-up" className="col-12 col-md-9 ">
            I'm a Data Engineer over 3 years of experience, capable of developing and maintaining multi-platform data applications, approaching many aspects of its applicability based on the desired context.
          </p>
          <p data-aos="fade-up">
            With demonstrated story in the education, real-state and financial business segments, I'm capable to understand and translate knowledge throughout business needs for stakeholders and development teams.
          </p>
          <p data-aos="fade-up">
            I have been working as Data Engineer since January 2022 and specializing my studies through the Data Architecture post graduation degree, at PUC Minas university, since 2024.
          </p>
        </div>
        <div data-aos="fade-up" className="col-12 about-contact text-center mt-2">
          <h3>Let's stay in touch!</h3>
          <div id="contact" className="d-flex flex-row justify-content-center align-items-center mt-1 m-auto">
            <a href="https://docs.google.com/document/d/1XXEA1HKDEHNQEYDNUNEOcsXkBMLtUErD70mV55vaz7Q/edit?usp=sharing" target={"_blank"} rel='noreferrer'><FontAwesomeIcon icon={faFile} className="mx-2 h1" /></a>
            <a href="https://www.linkedin.com/in/felipemoreiran24/" target={"_blank"} rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className="mx-2 h1" /></a>
            <a href="https://github.com/moreirafelipe" target={"_blank"} rel='noreferrer'><FontAwesomeIcon icon={faGithub} className="mx-2 h1" /></a>
            <a href="mailto:felipe.saint@gmail.com" target={"_blank"} rel='noreferrer'><FontAwesomeIcon icon={faEnvelope} className="mx-2 h1" /></a>
          </div>
        </div>
      </div>

    </div>
  )
}