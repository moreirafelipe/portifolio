import { Banner } from "../../components/Banner";
import { GridCarousel } from "../../components/Carousel";
import { Habilities } from "../../components/Habilities";

//Array com dados dos projetos
const arrayData = [
  {
    id: 1,
    name: 'Amar e Cuidar',
    host: 'https://amar-e-cuidar-two.vercel.app/',
    repo: 'https://github.com/CTD-E-Commerce',
    description: 'E-commerce platform developed with React JS, Java, Spring, MySQL and delivered by AWS.'
  },
  {
    id: 2,
    name: 'Odontoclinic',
    host: 'https://github.com/moreirafelipe/odontoclinic-api-service',
    repo: 'https://github.com/moreirafelipe/odontoclinic-api-service',
    description: 'Rest API Service developed with Java, Spring Boot and Log4J.'
  },
  {
    id: 3,
    name: 'ACAMASYS - Academic Managment System',
    host: 'https://github.com/moreirafelipe/dh-poo-checkpoint1',
    repo: 'https://github.com/moreirafelipe/dh-poo-checkpoint1',
    description: 'Academic management system for classes management.'
  },
  {
    id: 4,
    name: 'To-do list',
    host: 'https://dh-front-end-02-checkpoint-02.github.io/Projeto-To-Do/',
    repo: 'https://github.com/DH-Front-End-02-Checkpoint-02/Projeto-To-Do',
    description: 'Web aplication for tasks management developed in HTML, CSS and Vanilla Javascript.'
  },
  {
    id: 5,
    name: 'Memory Fighter',
    host: 'https://moreirafelipe.github.io/memory-fighter/',
    repo: 'https://github.com/moreirafelipe/memory-fighter',
    description: 'Memory game that simulates the Street Fighter game menu with Vanilla Javascript and SASS.'
  },
  {
    id: 6,
    name: 'Travels Book',
    host: 'https://moreirafelipe.github.io/dh-front2-checkpoint1/',
    repo: 'https://github.com/moreirafelipe/dh-front2-checkpoint1',
    description: 'Travel organization webb app using Vanilla JS, CSS 3 and LocalStoraging.'
  },
  {
    id: 7,
    name: 'Calculator',
    host: 'https://moreirafelipe.github.io/calculadora/',
    repo: 'https://github.com/moreirafelipe/calculadora',
    description: 'Simple calculator using Vanilla Javascript and CSS grid layout for the Front-end 2 course.'
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