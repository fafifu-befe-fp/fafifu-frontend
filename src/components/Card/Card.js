import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div className='container'>
      <div className="card p-2">
        <img className="card-img-top" src="../../img/sepatu-static.jpg" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Limited Edition Series</h5>
          <small className="card-text text-muted">Sepatu</small>
          <p className='mt-2'>Rp250.000</p>
        </div>
      </div>
    </div>
  )
}

export default Card