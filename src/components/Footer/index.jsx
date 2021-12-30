import { ReactComponent as BootstrapSVG } from '../../assets/icons/bootstrap.svg';
import { ReactComponent as SassSVG } from '../../assets/icons/sass.svg';
import { ReactComponent as ReactSVG } from '../../assets/icons/react.svg';
import felipePNG from '../../assets/icons/flaticon_fm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

export default function Footer() {
  return (
    <section id="footer" className="bg-black text-light text-center pt-3">
      <div id="medias">
        <div id="description" className="d-flex flex-column align-items-center justify-content-center m-auto my-2">
          <img src={felipePNG} alt="logo" />
          <p>&#169; 2021</p>
        </div>
      </div>
    </section>
  );
}