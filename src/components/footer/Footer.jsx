
import { contacto } from "../../../data/contact/contacto"
import { CardsFooter } from "./CardsFooter";


export const Footer = () => {
  const data = contacto;
  return (
    <>
      <div className="container-fluid text-center fondo-footer footer-flex" id="footer">
        <h3 className="titulos-secundarios titulo-footer pt-1 mb-5">Ponete en contacto conmigo</h3>
        <div className="container">
          <div className="row justify-content-center">
            {data.map(info => ( 
              <CardsFooter key={info.id} {...info} />
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid text-center copyright">
        <h4 className="copy-footer">
          Pagina creada por Javier Brizuela Czech |{" "}
          <span className="far fa-copyright"></span> 2023 All rights
          reserved{" "}
        </h4>
      </div>
    </>
  );
};