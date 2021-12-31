import { useEffect } from 'react';

import { ReactComponent as ReactBootstrapSVG } from '../../assets/icons/react-bootstrap.svg';
import { ReactComponent as AwsSVG } from '../../assets/icons/aws.svg';
import { ReactComponent as DockerSVG } from '../../assets/icons/docker.svg';
import { ReactComponent as JenkinsSVG } from '../../assets/icons/jenkins.svg';
import { ReactComponent as JavaSVG } from '../../assets/icons/java.svg';
import { ReactComponent as SpringSVG } from '../../assets/icons/spring.svg';
import { ReactComponent as PythonSVG } from '../../assets/icons/python.svg';
import { ReactComponent as DjangoSVG } from '../../assets/icons/django.svg';
import { ReactComponent as JavascriptSVG } from '../../assets/icons/js.svg';
import { ReactComponent as NodeSVG } from '../../assets/icons/nodejs.svg';
import { ReactComponent as SassSVG } from '../../assets/icons/sass.svg';
import { ReactComponent as SqlServerSVG } from '../../assets/icons/sqlserver.svg';
import { ReactComponent as MySqlSVG } from '../../assets/icons/mysql.svg';
import { ReactComponent as MongoDbSVG } from '../../assets/icons/mongodb.svg';
import { ReactComponent as ReactSVG } from '../../assets/icons/react.svg';
import felipePNG from '../../assets/icons/flaticon_fm.png';

//Aos lib import
import Aos from "aos";
import 'aos/dist/aos.css';

import './styles.scss'

export function Habilities() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="habilities" className="d-flex flex-column flex-wrap justify-content-center text-center align-content-center text-white bg-black mt-5">
      <h3 data-aos="fade-up" className="w-100 text-center fs-3 mt-5 pt-5">Hard Skills</h3>
      <p data-aos="fade-up" className="fs-5">These are some skills I've been working with lately:</p>
      <div data-aos="fade-up" className="container-icons d-flex flex-wrap flex-row justify-content-around align-items-center pt-2 ">
        <JavascriptSVG data-aos="fade-up" className="skillIcon" />
        <NodeSVG data-aos="fade-up" className="skillIcon" />
        <ReactSVG data-aos="fade-up" className="skillIcon" />
        <ReactBootstrapSVG data-aos="fade-up" className="skillIcon" />
        <SassSVG data-aos="fade-up" className="skillIcon" />
        <JavaSVG data-aos="fade-up" className="skillIcon" />
        <SpringSVG data-aos="fade-up" className="skillIcon" />
        <PythonSVG data-aos="fade-up" className="skillIcon" />
        <DjangoSVG data-aos="fade-up" className="skillIcon bg-light px-2" />
        <SqlServerSVG data-aos="fade-up" className="skillIcon" />
        <MySqlSVG data-aos="fade-up" className="skillIcon" />
        <MongoDbSVG data-aos="fade-up" className="skillIcon" />
        <DockerSVG data-aos="fade-up" className="skillIcon" />
        <JenkinsSVG data-aos="fade-up" className="skillIcon" />
        <AwsSVG data-aos="fade-up" className="skillIcon" />
      </div>
    </div>
  )
}