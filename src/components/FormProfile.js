import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { useDropzone } from 'react-dropzone';
import '../App.css'

const FormProfile = () => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>
    ));
    
  return (
    <>
            <div className='container d-block'>
                <div className='row mt-5 d-flex justify-content-center'>
                    <div className='col-sm-6 col-md-12 col-lg-6 forminfo'>
                        <IoMdArrowBack className='backlogo mt-2' size={20} />
                        <form>
                            <section className="container d-block">
                                <div {...getRootProps({className: 'dropzone disabled'})} className='d-flex justify-content-center'>
                                    <input {...getInputProps()} />
                                    <img src='img/uploadphoto.svg' alt=''/>
                                    {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
                                </div>
                                <aside className='d-flex justify-content-center mt-3'>
                                    <ul className='listfile'>{files}</ul>
                                </aside>
                            </section>
                            <div className="col-sm-12 mb-3 col-md-12">
                                <label for="inputName" className="form-label">Nama*</label>
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col-sm-12 mb-3 col-md-12">
                                <label for="inputState" className="form-label">Kota*</label>
                                <select id="inputState" className="form-select selectedoption" >
                                    <option selected disabled>Pilih Kota</option>
                                    <option>Jakarta</option>
                                    <option>Surabaya</option>
                                    <option>Semarang</option>
                                    <option>Yogyakarta</option>
                                    <option>Denpasar</option>
                                </select>
                            </div>
                            <div class="mb-3 col-sm-12 col-md-12">
                                <label for="exampleFormControlTextarea1" className="form-label">Alamat*</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
                            </div>
                            <div className="col-sm-12 col-md-12 mb-3">
                                <label for="inputName" className="form-label">No Handphone*</label>
                                <input type="text" className="form-control" placeholder="Contoh: +628123456789" aria-label="First name" />
                            </div>
                            <button type="button" className="buttonsimpan col-sm-12 col-12 mt-2">Simpan</button>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default FormProfile