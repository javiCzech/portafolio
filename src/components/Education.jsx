import React from 'react'

export const Education = () => {
  return (<>
            <div className="experience__textHolder">
              <p className="experience__title pt-4">Educacion</p>
            </div>
            <div
              id="workTimeline"
              className="containerTimeline containerTimeline--work">
                <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                  <p>Analista Programador</p>
                  <span>Universidad Abierta Interamericana</span>
                  <p>Marzo 2023 - Cursando</p>
                </div>
              </div>
              <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                  <p>Javascript (Certificado top 10)</p>
                  <span>Coderhouse</span>
                  <p>Sep-Nov 2022</p>
                </div>
              </div>
              <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                  <p>Web Development</p>
                  <span>Coderhouse</span>
                  <p>jul-Sep 2022</p>
                </div>
              </div>
              <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                  <p>React Js (Certificado top 10)</p>
                  <span>Coderhouse</span>
                  <p>jul-Sep 2021</p>
                </div>
              </div>
              <div className="timeline-block timeline-block-right">
                <div className="marker"></div>
                <div className="timeline-content">
                  <p>Desarrollador FrontEnd</p>
                  <span>Educacion IT</span>
                  <p>Marzo 2021 - Julio 2021</p>
                  <p className="timeline-text">
                    Complete la carrera de desarrollador FrontEnd del instituto
                    EducacionIT.
                  </p>
                </div>
              </div>
              <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
                <div className="timeline-content">
                  <p>Ingenieria en Sistemas</p>
                  <span>Universidad Abierta Interamericana</span>
                  <p>2009-2012 (incompleto)</p>
                </div>
              </div>
              </div>
              </>)
        
}
