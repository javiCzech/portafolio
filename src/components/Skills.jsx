export const Skills = () => {
  return (
    <>
      <section className="skills">
        <div className="container max-width">
          <h2 className="title fadein">Habilidades</h2>
          <div className="row skills-content">
            <div className="col-md-12 col-lg-6 column left">
              <div className="text">Los lenguajes y frameworks que domino</div>
              <p className="mt-3">
                Soy un Desarrollador FrontEnd con experiencia en la
                creación de sitios web responsivos e interactivos utilizando
                tecnologías como HTML, CSS y JavaScript, así como frameworks
                como ReactJS y herramientas como Sass, Bootstrap y Git. Soy una
                persona que aprende rápido y me gusta mantenerme actualizado con las
                últimas tendencias y tecnologías en el mundo del desarrollo web.
                También tengo habilidades en la solución de problemas y me gusta el
                trabajo en equipo.

              </p>
              <a href="#projects" className="btn btn-danger">
                Saber mas de mi <i className="fas fa-angle-double-right"></i>
              </a>
            </div>
            <div className="col-md-12 col-lg-6 column right">
              <div className="info container">
                <div className="row">
                  <article className="col-3">
                    <a href="https://www.w3.org/html/" target="_blank">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                        alt="html5"
                        width="100"
                        height="100"
                      />
                    </a>
                  </article>
                  <article className="col-3">
                    <a href="https://www.w3schools.com/css/" target="_blank">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                        alt="css3"
                        width="100"
                        height="100"
                      />
                    </a>
                  </article>
                  <article className="col-3">
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      target="_blank"
                    >
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        alt="javascript"
                        width="80"
                        height="80"
                      />
                    </a>
                  </article>
                  <article className="col-3">
                    <a href="https://reactjs.org/" target="_blank">
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                        alt="react"
                        width="90"
                        height="90"
                      />
                    </a>
                  </article>
                </div>
                <div className="row mt-2">
                  <article className="col-3">
                    <a
                      href="https://getbootstrap.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                        alt="bootstrap"
                        width="100"
                        height="100"
                      />
                    </a>
                  </article>
                  <article className="col-3">
                    <a
                      href="https://sass-lang.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                        alt="sass"
                        width="100"
                        height="100"
                      />
                    </a>
                  </article>
                  <article className="col-3">
                    <a
                      href="https://redux.js.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                        alt="redux"
                        width="100"
                        height="100"
                      />
                    </a>
                  </article>
                  <article className="col-3">
                    <a
                      href="https://git-scm.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                        alt="git"
                        width="100"
                        height="100"
                      />
                    </a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
