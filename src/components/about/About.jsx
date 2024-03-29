import React from "react";

export const About = () => {
  return (
    <>
      <section className="fondo-about pt-5" id="about">
        <h2 className="titulos-secundarios text-center pt-5" id="titulo-about">
          Un poco sobre mi:
        </h2>
        <div className="container">
        <div className="row">
          <article className="col-xs-12 col-md-12 col-lg-6 pt-3 text-center">
            <img
              src="../data/image/javier-brizuela.jpg"
              className="img-javier"
              alt="Javier Brizuela"
            />
          </article>
          <article className="col-xs-12 col-md-12 col-lg-6 pt-3">
            <p className="description mt-4">
              Soy un desarrollador FrontEnd autodidacta con experiencia en
              JavaScript y ReactJS. Me he dedicado a aprender por mi cuenta las
              habilidades necesarias para construir sitios web y aplicaciones
              web altamente interactivas y receptivas. Mi experiencia se centra
              en el desarrollo de la interfaz de usuario, la creación de
              componentes reutilizables y el uso de herramientas modernas de
              desarrollo para crear aplicaciones robustas. Actualmente me
              encuentro cursando la carrera de Analista Programador en la
              universidad Abierta Interamericana.
            </p>
            <div className="row">
              <article className="col-4">
                <i className="fas fa-user fondo-fa"> Soltero </i>
              </article>
              <article className="col-4">
                <i className="fas fa-language fondo-fa">
                  {" "}
                  Español, Ingles y Portugues{" "}
                </i>
              </article>
              <article className="col-4">
                <i className="fas fa-map-marker-alt fondo-fa">
                  {" "}
                  San Isidro - Buenos Aires
                </i>
              </article>
            </div>
            <div className="text-center mt-5">
              <a
                href="../data/Cv Javier Brizuela Czech.pdf"
                className="btn btn-danger cv"
                target="_blank"
              >
                {" "}
                Descargar CV <i className="fas fa-download descarga"></i>
              </a>
            </div>
          </article>
        </div>
        </div>
      </section>
    </>
  );
};
