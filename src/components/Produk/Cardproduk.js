import React from 'react'

const Cardproduk = () => {
  return (
    <div className='card'>
        <div className='card-body'>
            <h5 className='card-title fw-bold'>Jam Tangan Casio</h5>
            <p className='card-text'>Aksesoris</p>
            <h5 className='fw-bold'>Rp 250.000</h5>
            <div className='d-grid gap-2'>
                <button type="submit" class="buttonsimpan w-75 text-white mb-2 mx-auto">Terbitkan</button>
                <button type="submit" class="buttonedit w-75 text-white mb-2 mx-auto">Edit</button>
            </div>
        </div>
    </div>
  )
}

export default Cardproduk