import { Banner } from "../../components/Banner";
import { GridCarousel } from "../../components/Carousel";
import { Habilities } from "../../components/Habilities";

//Array com dados dos projetos
const arrayData = [
  {
    name: 'Memory Fighter',
    host: 'https://moreirafelipe.github.io/memory-fighter/',
    repo: 'https://github.com/moreirafelipe/memory-fighter',
    description: 'Jogo da memória que simula o menu do jogo Street Fighter com Vanilla Javascript e SASS.'
  },
  {
    name: 'Travels Book',
    host: 'https://moreirafelipe.github.io/dh-front2-checkpoint1/',
    repo: 'https://github.com/moreirafelipe/dh-front2-checkpoint1',
    description: 'Projeto de uma aplicação para organização de viajens utilizando Vanilla Javacript, CSS 3 e LocalStoraging.'
  },
  {
    name: 'My Flix',
    host: 'https://dh-front3-myflix-46cjrfj0q-tstream.vercel.app/',
    repo: 'https://github.com/moreirafelipe/dh-front3-myflix',
    description: 'Projeto de uma interface responsiva para uma plataforma de streaming utilizando React e CSS.'
  },
  {
    name: 'Calculadora',
    host: 'https://moreirafelipe.github.io/calculadora/',
    repo: 'https://github.com/moreirafelipe/calculadora',
    description: 'Projeto de uma calculadora simples utilizando Vanilla Javascript e CSS grid layout para a disciplina Front-end 2.'
  },
  {
    name: 'Lista de felinos',
    host: 'https://moreirafelipe.github.io/dh-exercicioListaFelinos/',
    repo: 'https://github.com/moreirafelipe/dh-exercicioListaFelinos',
    description: 'Projeto de uma aplicação desenvolvida em Vanilla Javascript que renderiza cards de animais no DOM.'
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