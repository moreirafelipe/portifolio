import { Banner } from "../../components/Banner";
import { GridCarousel } from "../../components/Carousel";
import { Habilities } from "../../components/Habilities";

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
    name: 'Amar e Cuidar',
    host: 'https://amar-e-cuidar-two.vercel.app/',
    repo: 'https://github.com/CTD-E-Commerce',
    description: 'E-commerce platform developed with React JS, Java, Spring, MySQL and delivered by AWS.',
    technologies: [<ReactBootstrapSVG />, <ReactSVG />, <SassSVG />, <MySqlSVG />, <AwsSVG />]
  },
  {
    id: 2,
    name: 'Odontoclinic',
    repo: 'https://github.com/moreirafelipe/odontoclinic-api-service',
    description: 'Rest API Service developed with Java, Spring Boot and Log4J.',
    technologies: [<JavaSVG />, <SpringSVG />]
  },
  {
    id: 3,
    name: 'ACAMASYS - Academic Managment System',
    repo: 'https://github.com/moreirafelipe/dh-poo-checkpoint1',
    description: 'Academic management system for classes management using Java 17 with data handling.',
    technologies: [<JavaSVG />]
  },
  {
    id: 4,
    name: 'To-do list',
    host: 'https://dh-front-end-02-checkpoint-02.github.io/Projeto-To-Do/',
    repo: 'https://github.com/DH-Front-End-02-Checkpoint-02/Projeto-To-Do',
    description: 'Web aplication for tasks management developed in HTML, CSS and Vanilla Javascript.',
    technologies: [<JavascriptSVG />, <CssSVG />]
  },
  {
    id: 5,
    name: 'Memory Fighter',
    host: 'https://moreirafelipe.github.io/memory-fighter/',
    repo: 'https://github.com/moreirafelipe/memory-fighter',
    description: 'Memory game that simulates the Street Fighter game menu with Vanilla Javascript and Sass.',
    technologies: [<JavascriptSVG />, <SassSVG />]
  },
  {
    id: 6,
    name: 'Travels Book',
    host: 'https://moreirafelipe.github.io/dh-front2-checkpoint1/',
    repo: 'https://github.com/moreirafelipe/dh-front2-checkpoint1',
    description: 'Travel organization webb app using Vanilla JS, CSS 3 and LocalStoraging.',
    technologies: [<JavascriptSVG />, <CssSVG />]
  },
  {
    id: 7,
    name: 'Calculator',
    host: 'https://moreirafelipe.github.io/calculadora/',
    repo: 'https://github.com/moreirafelipe/calculadora',
    description: 'Simple calculator using Vanilla Javascript and CSS grid layout for the Front-end 2 course.',
    technologies: [<JavascriptSVG />, <CssSVG />]
  }
]

const Home = () => {

  return (
    <>
      <Banner id="start" />
      <GridCarousel id="projects" projects={arrayData} />
      <Habilities id="habilities" />
    </>
  );
}

export default Home;