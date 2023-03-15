import { projects } from "../../data/projects/projects"
import { CardProjects } from "./CardProjects";

export const Projects = () => {
    const works = projects;
  return (
    <>
    <section className="container text-center">
    <h3 className="titulos-secundarios">Mis Proyectos</h3>
    <div >
      <p>FrontEnd</p>
    </div>
    <div>
    <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
    {works.map( work =>(
        <CardProjects key={work.id} {...work}/>)
    )}
</div>
    </div>
    </section>
    </>
  )
}
