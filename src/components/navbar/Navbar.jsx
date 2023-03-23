

export const Navbar = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
        <div className="logo ps-5">
          <a href="#">Portfo<span>lio.</span></a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experiencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#proyectos">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
