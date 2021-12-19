import { Carousel } from '@trendyol-js/react-carousel';
import { Item } from '../Item';
import Quote from '../Quote';

//Importing SVGs navigation arrows
import { ReactComponent as BackSVG } from '../../assets/icons/back.svg';
import { ReactComponent as ForwardSVG } from '../../assets/icons/forward.svg';

//Importando estilos
import './styles.scss'

//Importando imagens PNG
import memoryfighter from '../../assets/images/projects/memoryfighter.png'
import travelsbook from '../../assets/images/projects/travelsbook.png';
import myFlix from '../../assets/images/projects/myflix.png';
import calculadora from '../../assets/images/projects/calculadora.png';
import felinos from '../../assets/images/projects/felinos.png';

//Function component que exporta o componentcarousel
export default function GridCarousel(props) {

  const imgName = [memoryfighter, travelsbook, myFlix, calculadora, felinos];

  //Iterando array de dados e retornando componentes que contém os cards como props children
  return (
    <div id="projetos" className="d-flex flex-column flex-wrap m-auto mt-5 pt-5">
      <h3 className='mt-5'>Projects</h3>
      <div className="d-none d-md-block">
        <Quote />
      </div>

      <Carousel infinite={true} responsive={true} show={props.show} slide={1} swiping={true} useArrowKeys={true} leftArrow={<BackSVG />} rightArrow={<ForwardSVG />} className="d-flex m-auto w-100">

        {props.projects.length > 0 && (props.projects.map((project, index) => {
          return (
            <Item key={index}>
              <div className="card bg-dark text-light m-4">
                <img src={imgName[index]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.host} className="btn btn-primary">Access</a>
                  <a href={project.repo} className="btn btn-light mx-2">Repository</a>
                </div>
              </div>
            </Item>
          )
        }))}
      </Carousel>
    </div>
  )
}