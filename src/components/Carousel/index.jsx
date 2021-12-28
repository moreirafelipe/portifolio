import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Item } from '../Item';
import Quote from '../Quote';

//Importando estilos
import './styles.scss'

//Importando imagens PNG
import amarCuidarFront from '../../assets/images/projects/amar-e-cuidar-front.png';
import amarCuidarBack from '../../assets/images/projects/amar-e-cuidar-back.png';
import odontoclinic from '../../assets/images/projects/odontoclinic.png';
import acamasys from '../../assets/images/projects/acamasys.png';
import memoryfighter from '../../assets/images/projects/memoryfighter.png';
import travelsbook from '../../assets/images/projects/travelsbook.png';
import calculadora from '../../assets/images/projects/calculadora.png';

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

  const imgName = [amarCuidarFront, amarCuidarBack, odontoclinic, acamasys, memoryfighter, travelsbook, calculadora];

  //Iterando array de dados e retornando componentes que contém os cards como props children
  return (
    <div id="projects" className="d-flex flex-column flex-wrap mx-auto mt-5 pt-4 px-2">
      <h3 className='mt-5 mb-0'>Projects</h3>
      <div className="d-none d-md-block">
        <Quote />
      </div>

      <Carousel className="carousel d-flex  m-auto w-100"
        showDots={true}
        responsive={responsive}
        infinite={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        renderArrowsWhenDisabled={true}
        autoPlay={false}
        autoPlaySpeed={10000}
        arrows={true}
      >
        {props.projects.length > 0 && (props.projects.map((project, index) => {
          return (
            <Item key={index}>
              <div className="card bg-black text-light mx-4">
                <img src={imgName[index]} className="card-img-top" alt="..." />
                <div className="card-body mb-5">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <ul key={index}>
                    {project.technologies.length > 0 && (project.technologies.map((technology, idx) => {
                      return <li key={idx}>{technology}</li>
                    }))}
                  </ul>
                  <div id="card-buttons">
                    {project.host != null ? (<a href={project.host} target={"_blank"} rel='noreferrer' className="btn btn-light fw-bold fs-6">Access</a>) : null}
                    <a href={project.repo} target={"_blank"} rel='noreferrer' className="btn btn-outline-success mx-2 fw-bold fs-6">Repository</a>
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