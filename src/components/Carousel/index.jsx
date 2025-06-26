import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Item } from '../Item';
import Quote from '../Quote';

//Importando estilos
import './styles.scss'
import "react-multi-carousel/lib/styles.css";

//Importando imagens PNG
import amarCuidarFront from '../../assets/images/projects/amar_e_cuidar_front.png';
import amarCuidarBack from '../../assets/images/projects/amar_e_cuidar_back.png';
import odontoclinic from '../../assets/images/projects/odontoclinic.png';
import travelsbook from '../../assets/images/projects/travelsbook.png';
import abcInc from '../../assets/images/projects/abc_inc_marketing_analysis.png';
import cosmeticsNosqlAnalysis from '../../assets/images/projects/cosmetics_nosql_analysis.png';
import tweeterWebscrapper from '../../assets/images/projects/tweeter_logic_model.png';



//Aos lib import
import Aos from "aos";
import 'aos/dist/aos.css';

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
      breakpoint: { max: 580, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const imgName = [abcInc, cosmeticsNosqlAnalysis, tweeterWebscrapper, amarCuidarFront, amarCuidarBack, odontoclinic, travelsbook];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  //Iterando array de dados e retornando componentes que contém os cards como props children
  return (
    <div data-aos="fade-in" id="projects" className="d-flex flex-column flex-wrap mx-auto p-2">
      <h3 data-aos="fade-up" className='mt-5 fs-3 mb-0'></h3>
      <div data-aos="fade-up" className='d-none d-md-block py-3'>
        <Quote />
      </div>

      <Carousel className="carousel d-flex m-auto w-100"
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