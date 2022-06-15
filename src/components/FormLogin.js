import React from 'react'
import LoginLeftSide from './LoginLeftSide'
import LoginRightSide from './LoginRightSide'


const FormLogin = () => {

  return (
    <div className='login-page d-flex m-0'>
        <div className='login-left w-50 h-100'>
          <LoginLeftSide />
        </div>
        <div className='login-right w-50 h-100'>
          <LoginRightSide />
        </div>
    </div>
  )
}

export default FormLogin