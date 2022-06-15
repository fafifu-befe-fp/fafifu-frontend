import React from 'react'

const LoginRightSide = () => {
  return (
    <div className='row justify-content-center align-items-center h-100'>
        <div className='col-6'>
            <h1 className='mb-3'>Masuk</h1>
            <form>
                <div class="mb-3">
                    <label for="InputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="InputEmail" placeholder='Contoh: johndee@gmail.com' />
                </div>
                <div class="mb-3">
                  <label for="InputPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="InputPassword" placeholder='Masukkan password'/>
                </div>
                <button type="submit" class="btn buttonsimpan w-100 text-white mb-5">Submit</button>
                <div className='wrapper-signup text-center'>
                  <span>Belum punya akun? <a href='#' className='text-decoration-none'>Daftar di sini</a></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginRightSide