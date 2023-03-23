
import React from 'react'

export const CardsFooter = ({imagen,titulo,info}) => {
  return (
    <>
      <div className="card card-footer col-10 col-md-6 col-lg-3 mx-auto my-4 text-center">
        <img src={imagen} className="card-img-foo" alt={titulo}/>
        <div className="card-body">
          <h5 className="card-title footer-texto">{titulo}</h5>
          <p className="card-text footer-texto mt-3">{info}</p>
        </div>
      </div>
    </>
  )
}