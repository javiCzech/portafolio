import React from 'react'

export const CardsFooter = ({imagen,titulo,info}) => {
  return (
    <>
    <div className="card card-footer col-sm-12 col-lg-3 mt-4">
  <img src={imagen} className="card-img-top" alt={titulo}/>
  <div className="card-body">
    <h5 className="card-title footer-texto">{titulo}</h5>
    <p className="card-text footer-texto">{info}</p>
  </div>
</div>
    </>
  )
}
