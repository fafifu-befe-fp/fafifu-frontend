import React from 'react'
import LoginLeftSide from './LoginLeftSide'
import LoginRightSide from './LoginRightSide'


const FormLogin = () => {

  return (
    <div className='login-page d-flex m-0'>
        <div className='login-left w-50 h-100 d-none d-sm-block'>
          <LoginLeftSide />
        </div>
        <div className='login-right w-50 h-100'>
          <div className='text-center logo d-block d-sm-none'>
            <img src='img/logo-sh.svg' className='imglogo mb-3'/>
          </div>
          <LoginRightSide />
        </div>
    </div>
  )
}

export default FormLogin