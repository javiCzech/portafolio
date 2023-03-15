

export const CardProjects = ({image,title,description,tags,technologies,repositories,netlify}) => {
  return (
    <>
    <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <span>{tags}</span>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <div className="row">
          {
            technologies.map((tec,index) =>
              <div className="col-4 mt-2" key={index}>
              <div className="caja-tags">
              <span className="tags rounded">{tec}</span>
              </div>
              </div> 
            )
          }
        </div>
        <div className="container mt-4">
          <div className="row">
            <a className="btn btn-danger col-6 projects-button" href={repositories} target="_blank">Codigo</a>
            <a className="btn btn-danger col-6 projects-button" href={netlify} target="_blank">Visualizar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
