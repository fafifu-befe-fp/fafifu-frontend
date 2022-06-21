import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone';
import '../App.css'
import Image from '../assets/images/Picture.svg'
import ImageProduct from '../assets/images/Produk.svg'
import '../assets/styles/Penawaran.css'

const Penawaran = () => {
  return (
    <div className='container d-block'>
        <div className='row mt-5 d-flex justify-content-center'>
            <div className='col-sm-6 col-md-12 col-lg-6 forminfo'>
                <IoMdArrowBack className='backlogo mt-2' size={20} />
                <div className="row d-flex flex-row shadow py-3 px-1 mb-3 bg-white rounded">
                    <div className="col-auto px-4">
                        <img className="row w-15" src={Image} alt=''/>
                    </div>
                    <div className="col-auto">
                        <div>
                            Nama Pembeli
                        </div>
                        <div>
                            Kota
                        </div>
                    </div>
                </div>
                <div className="font-weight-bold">
                    Daftar Produkmu Yang Ditawar
                </div>
                <div className="row d-flex flex-row shadow py-3 px-1 mt-3 rounded">
                    <div className="row">
                        <div className="col-auto">
                            <img className="" src={ImageProduct} alt=''/>
                        </div>
                        <div className="col-10">
                            <div className="d-flex justify-content-between w-100">
                                <div className="text-secondary">
                                    Penawaran Produk
                                </div>
                                <div className='ml-auto'>
                                    20 Apr, 14.00
                                </div>
                            </div>
                            <div>
                                Jam Tangan Casio
                            </div>
                            <div>
                                Rp. 250.000
                            </div>
                            <div>
                                Ditawar Rp. 200.000
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-end pt-3'>
                        <button type="button" className="col-4 mx-2 btn button-penawaran-tolak">
                            Status
                        </button>
                        <button type="button" className="col-4 btn button-penawaran-terima">
                            Hubungi di <BsWhatsapp className="mb-1 mx-1"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Penawaran