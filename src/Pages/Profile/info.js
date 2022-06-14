import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'

const info = () => {
  return (
    <>
        <div>Navbar harusnya</div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-sm-3 text-end'>
                    <IoMdArrowBack className='backlogo mt-2' size={20} />
                </div>
                <form className='col-sm-6 forminfo'>
                    <div className="col-sm-12 mb-3">
                        <label for="inputName" className="form-label">Nama*</label>
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col-sm-12 mb-3">
                        <label for="inputState" className="form-label">Kota*</label>
                        <select id="inputState" className="form-select selectedoption" >
                            <option selected>Pilih Kota</option>
                            <option>Jakarta</option>
                            <option>Surabaya</option>
                            <option>Semarang</option>
                            <option>Yogyakarta</option>
                            <option>Denpasar</option>
                        </select>
                    </div>
                    <div class="mb-3 col-sm-12">
                        <label for="exampleFormControlTextarea1" className="form-label">Alamat*</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Contoh: Jalan Ikan Hiu 33'></textarea>
                    </div>
                    <div className="col-sm-12 mb-3">
                        <label for="inputName" className="form-label">No Handphone*</label>
                        <input type="text" className="form-control" placeholder="Contoh: +628123456789" aria-label="First name" />
                    </div>
                    <button type="button" className="buttonsimpan col-sm-12 mt-2">Simpan</button>
                </form>
                <div className='col-sm-3'></div>
            </div>
        </div>
  </>
  )
}

export default info