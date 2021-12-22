import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Item } from '../Item';
import Quote from '../Quote';

//Importando estilos
import './styles.scss'

//Importando imagens PNG
import amarCuidar from '../../assets/images/projects/amar-e-cuidar-front.png'
import todolist from '../../assets/images/projects/todolist.png'
import odontoclinic from '../../assets/images/projects/odontoclinic.png'
import memoryfighter from '../../assets/images/projects/memoryfighter.png'
import travelsbook from '../../assets/images/projects/travelsbook.png';
import calculadora from '../../assets/images/projects/calculadora.png';
import felinos from '../../assets/images/projects/felinos.png';

//Function component que exporta o componentcarousel
export function GridCarousel(props) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const imgName = [amarCuidar, odontoclinic, todolist, memoryfighter, travelsbook, calculadora, felinos];

  //Iterando array de dados e retornando componentes que contém os cards como props children
  return (
    <div id="projects" className="d-flex flex-column flex-wrap mx-auto mt-5 pt-5">
      <h3 className='mt-5'>Projects</h3>
      <div className="d-none d-md-block">
        <Quote />
      </div>

      <Carousel className="carousel d-flex m-auto w-100 mt-1"
        showDots={true}
        responsive={responsive}
        infinite={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        renderArrowsWhenDisabled={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        arrows={true}
      >
        {props.projects.length > 0 && (props.projects.map((project, index) => {
          return (
            <Item key={index}>
              <div className="card bg-black text-light m-4">
                <img src={imgName[index]} className="card-img-top" alt="..." />
                <div className="card-body mb-5">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <div id="card-buttons">
                    <a href={project.host} className="btn btn-light fw-bold fs-6">Access</a>
                    <a href={project.repo} className="btn btn-outline-success mx-2 fw-bold fs-6">Repository</a>
                  </div>
                </div>
              </div>
            </Item>
          )
        }))}
      </Carousel>
    </div >
  )
}