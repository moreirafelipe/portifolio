import { Banner } from "../../components/Banner";
import { GridCarousel } from "../../components/Carousel";
import { Skills } from "../../components/Skills";
import { About } from "../../components/About";
import { GitHubSkillStats } from "../../components/Chart";

//Importando icones de tecnologias
import { ReactComponent as ReactBootstrapSVG } from '../../assets/icons/react-bootstrap.svg';
import { ReactComponent as AwsSVG } from '../../assets/icons/aws.svg';
import { ReactComponent as CssSVG } from '../../assets/icons/css.svg';
import { ReactComponent as JavaSVG } from '../../assets/icons/java.svg';
import { ReactComponent as SpringSVG } from '../../assets/icons/spring.svg';
import { ReactComponent as PythonSVG } from '../../assets/icons/python.svg';
import { ReactComponent as JavascriptSVG } from '../../assets/icons/js.svg';
import { ReactComponent as NodeSVG } from '../../assets/icons/nodejs.svg';
import { ReactComponent as SassSVG } from '../../assets/icons/sass.svg';
import { ReactComponent as MySqlSVG } from '../../assets/icons/mysql.svg';
import { ReactComponent as ReactSVG } from '../../assets/icons/react.svg';
import { ReactComponent as OracleSVG } from '../../assets/icons/oracle.svg';
import { ReactComponent as CassandraSVG } from '../../assets/icons/cassandra.svg';
import { ReactComponent as JupyterSVG } from '../../assets/icons/jupyter.svg';
import { ReactComponent as SparkSVG } from '../../assets/icons/spark.svg';
import { ReactComponent as PandasSVG } from '../../assets/icons/pandas.svg';

//Array com dados dos projetos
const arrayData = [
  {
    id: 1,
    name: 'ABC Inc - Marketing Analysis',
    host: 'https://github.com/moreirafelipe/abc-data-analisys/blob/main/notebooks/marketing_analysis_complete.ipynb',
    repo: 'https://github.com/moreirafelipe/abc-data-analisys',
    description: 'Data analysis for a marketing forecast source sample.',
    technologies: [<JupyterSVG />, <PythonSVG />, <PandasSVG className="bg-white" />]
  },
  {
    id: 2,
    name: 'Cosmetic shop - Data Science ETL Project',
    host: 'https://github.com/moreirafelipe/dsa-nosql-projeto2/blob/main/Notebook/Projeto2.ipynb',
    repo: 'https://github.com/moreirafelipe/dsa-nosql-projeto2',
    description: 'ETL project for a cosmetic shop, using NoSQL database.',
    technologies: [<JupyterSVG />, <PythonSVG />, <SparkSVG />, <CassandraSVG />]
  },
  {
    id: 3,
    name: 'Tweeter webscrapper - relational logic model',
    host: 'https://github.com/moreirafelipe/dsa-sql-projeto1/blob/main/modelos%20de%20dados/ModeloFisico.sql',
    repo: 'https://github.com/moreirafelipe/dsa-sql-projeto1',
    description: 'Relational logic model for the tweeter webscrapper.',
    technologies: [<OracleSVG />]
  },
  {
    id: 4,
    name: 'Amar e Cuidar - Front-End',
    host: 'https://amar-e-cuidar-two.vercel.app/',
    repo: 'https://github.com/CTD-E-Commerce/ctd-ecommerce-front',
    description: 'Front-end layer for the cloud based e-commerce platform Amar e cuidar.',
    technologies: [<SassSVG />, <ReactSVG />, <NodeSVG />, <ReactBootstrapSVG />]
  },
  {
    id: 5,
    name: 'Amar e Cuidar - Back-End',
    repo: 'https://github.com/CTD-E-Commerce/ctd-ecommerce-back',
    description: 'Back-end layer for the cloud based e-commerce platform Amar e cuidar.',
    technologies: [<JavaSVG />, <SpringSVG />, <MySqlSVG />, <AwsSVG />]
  },
  {
    id: 6,
    name: 'Odontoclinic',
    repo: 'https://github.com/moreirafelipe/odontoclinic-api-service',
    description: 'Provide appointments for your odontologic platform with this Rest API Service.',
    technologies: [<JavaSVG />, <SpringSVG />]
  },
  {
    id: 7,
    name: 'Travels Book',
    host: 'https://moreirafelipe.github.io/dh-front2-checkpoint1/',
    repo: 'https://github.com/moreirafelipe/dh-front2-checkpoint1',
    description: 'Plan your next vacations and keep your preferences saved with this travels web app.',
    technologies: [<CssSVG />, <JavascriptSVG />]
  }
]

const Home = () => {

  return (
    <>
      <Banner id="start" />
      <About id="about" />
      <GridCarousel id="projects" projects={arrayData} />
      <GitHubSkillStats />
      <Skills id="skills" />
    </>
  );
}

export default Home;