import { ReactComponent as BootstrapSVG } from '../../assets/icons/bootstrap.svg';
import { ReactComponent as SassSVG } from '../../assets/icons/sass.svg';
import { ReactComponent as ReactSVG } from '../../assets/icons/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

export default function Footer() {
  return (
    <section id="footer" className="bg-black text-light text-center">
      <div className="w-100">
        <p>Fique a vontade para interagir através das minhas redes sociais!</p>
      </div>
      <div id="medias">
        <div id="icons" className="d-flex align-items-center m-auto">
          <ReactSVG />
          <BootstrapSVG />
          <SassSVG />
        </div>
        <div id="description" className="d-flex flex-column align-items-center justify-content-center m-auto">
          <p>Felipe Moreira</p>
          <p>&#169; 2021</p>
        </div>
        <div id="contact" className="d-flex flex-row align-items-center m-auto">
          <a href="https://www.linkedin.com/in/felipen20/"><FontAwesomeIcon icon={faLinkedin} className="mx-2 h3" /></a>
          <a href="mailto:felipe.saint@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="mx-2 h3" /></a>
          <a href="https://github.com/moreirafelipe"><FontAwesomeIcon icon={faGithub} className="mx-2 h3" /></a>
        </div>
      </div>
    </section>
  );
}