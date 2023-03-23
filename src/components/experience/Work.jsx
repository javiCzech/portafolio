import React from "react";

export const Work = () => {
  return (
    <>
      <div className="experience__textHolder">
        <p className="experience__title pt-4">Experiencia</p>
      </div>

      <div className="wow animate__animated animate__fadeInUp animate__slow">
        <div id="educationTimeline" className="containerTimeline">
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <p>CompuBoulogne</p>
              <span>Tecnico Reparador de Pc/Laptos</span>
              <p>09/2022 - 01/2015</p>
              <p className="timeline-text">
                Atención al publico. 
                Experiencia en el armado de PCs de
                escritorio y laptops personalizados, desde la realización de
                presupuestos y ventas hasta el ensamblaje final. Amplio
                conocimiento en hardware y software de computadoras para ofrecer
                soluciones personalizadas a los clientes.
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <p>Baufest</p>
              <span>Help Desk</span>
              <p>10/2012 - 09/2014</p>
              <p className="timeline-text">
                Experiencia en mantenimiento de hardware y software de PCs de
                escritorio y laptops, incluyendo la resolución de problemas de
                hardware, reinstalación de sistemas operativos, actualización de
                controladores y aplicaciones, y eliminación de virus y malware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
