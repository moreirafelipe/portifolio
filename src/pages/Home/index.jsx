import { Banner } from "../../components/Banner";
import { GridCarousel } from "../../components/Carousel";
import { Habilities } from "../../components/Habilities";

//Array com dados dos projetos
const arrayData = [
  {
    name: 'Memory Fighter',
    host: 'https://moreirafelipe.github.io/memory-fighter/',
    repo: 'https://github.com/moreirafelipe/memory-fighter',
    description: 'Memory game that simulates the Street Fighter game menu with Vanilla Javascript and SASS.'
  },
  {
    name: 'Travels Book',
    host: 'https://moreirafelipe.github.io/dh-front2-checkpoint1/',
    repo: 'https://github.com/moreirafelipe/dh-front2-checkpoint1',
    description: 'Design of a travel organization application using Vanilla Javascript, CSS 3 and LocalStoraging.'
  },
  {
    name: 'My Flix',
    host: 'https://dh-front3-myflix-46cjrfj0q-tstream.vercel.app/',
    repo: 'https://github.com/moreirafelipe/dh-front3-myflix',
    description: 'Design of a responsive interface for a streaming platform using React and CSS.'
  },
  {
    name: 'Calculator',
    host: 'https://moreirafelipe.github.io/calculadora/',
    repo: 'https://github.com/moreirafelipe/calculadora',
    description: 'Design of a simple calculator using Vanilla Javascript and CSS grid layout for the Front-end 2 course.'
  },
  {
    name: 'List of cats',
    host: 'https://moreirafelipe.github.io/dh-exercicioListaFelinos/',
    repo: 'https://github.com/moreirafelipe/dh-exercicioListaFelinos',
    description: 'Project of an application developed in Vanilla Javascript that renders cards of animals in the DOM.'
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