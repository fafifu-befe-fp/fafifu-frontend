import React from 'react'
import Cardproduk from '../../components/Produk/Cardproduk'
import Cardprofile from '../../components/Produk/Cardprofile'
import CarouselCard from '../../components/Produk/Carousel'
import Deskripsi from '../../components/Produk/Deskripsi'

const HalamanProduk = () => {
  return (
    <div className='container d-flex justify-content-center'>
        <div className='left'>
            <div className='leftwrapper'>
              <Cardproduk />
              <Deskripsi />
            </div>
        </div>
        <div className='right'>
              <CarouselCard />
              <Cardprofile />
        </div>
    </div>
  )
}

export default HalamanProduk