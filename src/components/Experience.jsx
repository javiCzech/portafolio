import { useState } from "react";
import { Education } from "./Education";
import { Work } from "./Work";

export const Experience = () => {
  const [work, setWork] = useState(true);
  const handleWork = () => {
    setWork(false);
    console.log(work);
  };
  const handleEducation = () => {
    setWork(true);
    console.log(work);
  };
  return (
    <>
      <div className="container text-center mt-5">
        <h3 className="h3 mt-4">Experiencia / Estudios </h3>
        <section className="row mt-3">
          <article className="btn col-6 trabajo" onClick={handleEducation}>
            <i className="fas fa-briefcase"></i> Trabajo
          </article>
          <article className="btn col-6 trabajo" onClick={handleWork}>
            <i className="fas fa-user-graduate"></i> Educacion
          </article>
        </section>
        <section id="experience" className="row mt-5">
          <div className="experience col-10 col-md-5 mx-auto">
            {(work) ? <Work/>
            : <Education/>}
          </div>
        </section>
      </div>
    </>
  );
};
