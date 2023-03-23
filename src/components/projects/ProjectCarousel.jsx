import { useState } from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
import { proyectos } from '../../../data/projects/proyectos';

export const ProjectCarousel = () => {
  const projects = proyectos;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<>
    <section id="proyectos" className="pt-5">
    <h3 className="titulos-secundarios text-center mt-3">Proyectos <span className="proyecto">realizados</span></h3>
    <p className="text-center text3 pt-4">Aqui podras encontrar los proyectos personales que programe hasta ahora</p>
    <div className="container text-center tamaño">
    <Carousel activeIndex={index} onSelect={handleSelect} className="my-4">
      {projects.map((proyecto) => (
        <Carousel.Item key={proyecto.id}>
          <Card className="mx-auto text-center">
            <Card.Img variant="top" src={proyecto.imagen} />
            <Card.Body>
              <Card.Title>{proyecto.titulo}</Card.Title>
              <Card.Text>{proyecto.descripcion}</Card.Text>
              <div className="text-center mb-4">
              <p className="col12 mt-3">Tecnologias utilizadas:</p>
              </div>
              <div className="d-flex justify-content-evenly align-items-center button-flex">
                {proyecto.tecnologias.map((tec,index) => 
                  (<Button className="mt-3" key={index}>{tec}</Button>))}
              </div>
              <div className="d-flex justify-content-evenly align-items-center mt-5">
                <Button variant="danger" href={proyecto.repositorio} target="_blanck">Repositorio</Button>
                <Button variant="danger" href={proyecto.paginaWeb}target="_blanck">Página Web</Button>
              </div>
              
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    </section>
    </>);
};





