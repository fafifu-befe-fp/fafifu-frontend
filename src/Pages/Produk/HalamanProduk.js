import React from 'react'

const HalamanProduk = () => {
  return (
    <div className='container'>
        <div className='row bagianatas pt-5'>
            <div className='col-8'>
                <img src='img/productimg.png' className='rounded produkimg'/>
            </div>
            <div className='col-4'>
                <div className='wrappernama'>
                  <p className='ms-4 mt-4 fw-bold'>Jam Tangan Casio</p>
                  <p className='ms-4 mt-2'>Aksesoris</p>
                  <p className='ms-4 mt-3'>Rp 200.000</p>
                  <button type="submit" class="buttonsimpan w-75 text-white mb-2 mx-auto">Submit</button>
                </div>
            </div>
        </div>
        <div className='row bagianbawah'>
            <div className='col-8'>

            </div>
            <div className='col-4'>
                
            </div>
        </div>
    </div>
  )
}

export default HalamanProduk