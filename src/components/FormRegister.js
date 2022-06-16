import React from 'react'
import RegisterRightSide from './RegisterRightSide'
import RegisterLeftSide from './RegisterLeftSide'

const FormRegister = () => {
  return (
    <div className='login-page d-flex m-0 '>
        <div className='login-left w-50 h-100 d-none d-sm-block'>
          <RegisterLeftSide />
        </div>
        <div className='login-right w-50 h-100'>
          <div className='text-center logo d-block d-sm-none'>
            <img src='img/logo-sh.svg' className='imglogo mb-3'/>
          </div>
          <RegisterRightSide />
        </div>
    </div>
  )
}

export default FormRegister