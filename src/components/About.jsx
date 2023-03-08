import React from "react";

export const About = () => {
  return (
    <>
      <section className="container-fluid fondo__about">
        <div className="row">
          <article className="col-6 col-xs-12 text-center">
            <img src="../data/image/javier-brizuela.jpg" className="img-javier" alt="Javier Brizuela" />
          </article>
          <article className="col-6 col-xs-12">
            <h2 className="procesadores text-center">Un poco sobre mi:</h2>
            <p>
              Soy un desarrollador FrontEnd autodidacta con experiencia en
              JavaScript y ReactJS. Me he dedicado a aprender por mi cuenta las
              habilidades necesarias para construir sitios web y aplicaciones
              web altamente interactivas y receptivas. Mi experiencia se centra
              en el desarrollo de la interfaz de usuario, la creación de
              componentes reutilizables y el uso de herramientas modernas de
              desarrollo para crear aplicaciones robustas.
              Actualmente me encuentro cursando la carrera de Analista Programador en la universidad
              Abierta Interamericana.

            </p>
          </article>
        </div>
      </section>
    </>
  );
};
