import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone';
// import './styles/Penawaran.css'
import './Styles/Penawaran.css'
import Hubungi from '../components/ModalPenawar';
import './Styles/DaftarJual.css'

const DaftarJual = () => {
  return (
    <div className='container-fluid'>
        <div className='row mt-2 d-flex justify-content-center'>
            <div className='col-sm-6 col-md-8 col-lg-8 forminfo'>
                <div className='mt-3 font-weight-bold'>
                    Daftar Jual Saya
                </div>
                <IoMdArrowBack className='backlogo mt-2' size={20} />
                <div className="row d-flex flex-row shadow rounded">
                    <div className="col-auto p-0 m-0">
                        <img className="row w-15" src='img/Penjual.svg' alt=''/>
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
                        <div className="row my-3 ">
                            Kategori
                        </div>
                        <div className="row py-0 category-container">
                            <div className="col-auto p-0 m-0">
                                <img className="img-fluid w-100 h-auto svg" src='img/box.svg' alt=""/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div className="col-auto text py-2">
                                    Semua Produk
                                </div>
                                <div className="col-2 py-2 svg">
                                    <img className="w-10" src='img/arrow-right.svg' alt=""/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row py-0 category-container">
                            <div className="col-auto py-2 px-0 mx-0">
                                <img className="w-10 svg" src='img/heart.svg' alt=""/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div className="col-auto text py-2">
                                    Diminati
                                </div>
                                <div className="col-2 py-2 svg">
                                    <img className="w-10" src='img/arrow-right.svg' alt=""/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row py-0 mb-3 category-container">
                            <div className="col-auto py-2 px-0 mx-0">
                                <img className="w-10 svg" src='img/dollar.svg' alt=""/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div className="col-auto text py-2">
                                    Terjual
                                </div>
                                <div className="col-2 py-2 svg">
                                    <img className="w-10" src='img/arrow-right.svg' alt=""/>
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