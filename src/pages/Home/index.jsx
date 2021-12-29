import { Banner } from "../../components/Banner";
import { GridCarousel } from "../../components/Carousel";
import { Habilities } from "../../components/Habilities";
import { About } from "../../components/About";
import TopArrow from "../../components/TopArrow";

//Importando icones de tecnologias
import { ReactComponent as ReactBootstrapSVG } from '../../assets/icons/react-bootstrap.svg';
import { ReactComponent as AwsSVG } from '../../assets/icons/aws.svg';
import { ReactComponent as CssSVG } from '../../assets/icons/css.svg';
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

//Array com dados dos projetos
const arrayData = [
  {
    id: 1,
    name: 'Amar e Cuidar - Front-End',
    host: 'https://amar-e-cuidar-two.vercel.app/',
    repo: 'https://github.com/CTD-E-Commerce/ctd-ecommerce-front',
    description: 'Front-end layer for the cloud based e-commerce platform Amar e cuidar.',
    technologies: [<SassSVG />, <ReactSVG />, <ReactBootstrapSVG />]
  },
  {
    id: 2,
    name: 'Amar e Cuidar - Back-End',
    repo: 'https://github.com/CTD-E-Commerce/ctd-ecommerce-back',
    description: 'Back-end layer for the cloud based e-commerce platform Amar e cuidar.',
    technologies: [<SpringSVG />, <MySqlSVG />, <AwsSVG />]
  },
  {
    id: 3,
    name: 'Odontoclinic',
    repo: 'https://github.com/moreirafelipe/odontoclinic-api-service',
    description: 'Provide appointments for your odontologic platform with this Rest API Service.',
    technologies: [<JavaSVG />, <SpringSVG />]
  },
  {
    id: 4,
    name: 'ACMASYS - Academic Managment System',
    repo: 'https://github.com/moreirafelipe/dh-poo-checkpoint1',
    description: 'Academic management system which organizes classes.',
    technologies: [<JavaSVG />]
  },
  {
    id: 5,
    name: 'Memory Fighter',
    host: 'https://moreirafelipe.github.io/memory-fighter/',
    repo: 'https://github.com/moreirafelipe/memory-fighter',
    description: 'Go Back in time with this Street Fighter Memory game.',
    technologies: [<SassSVG />, <JavascriptSVG />]
  },
  {
    id: 6,
    name: 'Travels Book',
    host: 'https://moreirafelipe.github.io/dh-front2-checkpoint1/',
    repo: 'https://github.com/moreirafelipe/dh-front2-checkpoint1',
    description: 'Plan your next vacations and keep your preferences saved with this travels web app.',
    technologies: [<CssSVG />, <JavascriptSVG />]
  },
  {
    id: 7,
    name: 'Calculator',
    host: 'https://moreirafelipe.github.io/calculadora/',
    repo: 'https://github.com/moreirafelipe/calculadora',
    description: 'Save your brain automating simple calcs.',
    technologies: [<CssSVG />, <JavascriptSVG />]
  }
]

const Home = () => {

  return (
    <>
      <Banner id="start" />
      <About id="about" />
      <GridCarousel id="projects" projects={arrayData} />
      <Habilities id="habilities" />
    </>
  );
}

export default Home;