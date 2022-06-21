import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone';
import Penjual from '../assets/images/Penjual.svg'
import ImageProduct from '../assets/images/Produk.svg'
import Box from '../assets/images/box.svg'
import Arrow from '../assets/images/arrow-right.svg'
import Heart from '../assets/images/heart.svg'
import Dollar from '../assets/images/dollar.svg'
import '../assets/styles/Penawaran.css'
import Hubungi from '../components/ModalPenawar';
import '../assets/styles/DaftarJual.css'

const DaftarJual = () => {
  return (
    <div className='container d-block'>
        <div className='row mt-5 d-flex justify-content-center'>
            <div className='col-sm-6 col-md-12 col-lg-10 forminfo'>
                <IoMdArrowBack className='backlogo mt-2' size={20} />
                <div className="row d-flex flex-row shadow py-3 px-1 mb-3 bg-white rounded">
                    <div className="col-auto px-4">
                        <img className="row w-15" src={Penjual} alt=''/>
                    </div>
                    <div className="col d-flex flex-row justify-content-between align-items-center">
                        <div className="col-auto">
                            <div>
                                Nama Penjual
                            </div>
                            <div>
                                Kota
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-row py-3 mb-3">
                    <div className="col-lg-3 px-4 shadow rounded">
                        <div className="row my-3">
                            Kategori
                        </div>
                        <div className="row py-0 category-container">
                            <div className="col-auto py-2 px-0 mx-0">
                                <img className="w-10 svg" src={Box} alt=""/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div className="col-auto text py-2">
                                    Semua Produk
                                </div>
                                <div className="col-2 py-2 svg">
                                    <img className="w-10" src={Arrow} alt=""/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row py-0 category-container">
                            <div className="col-auto py-2 px-0 mx-0">
                                <img className="w-10 svg" src={Heart} alt=""/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div className="col-auto text py-2">
                                    Diminati
                                </div>
                                <div className="col-2 py-2 svg">
                                    <img className="w-10" src={Arrow} alt=""/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row py-0 mb-3 category-container">
                            <div className="col-auto py-2 px-0 mx-0">
                                <img className="w-10 svg" src={Dollar} alt=""/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div className="col-auto text py-2">
                                    Terjual
                                </div>
                                <div className="col-2 py-2 svg">
                                    <img className="w-10" src={Arrow} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        Tambah Produk +
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DaftarJual