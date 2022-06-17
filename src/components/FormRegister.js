import React from 'react'
import RegisterRightSide from './RegisterRightSide'
import RegisterLeftSide from './RegisterLeftSide'

const FormRegister = () => {
  return (
    <div className='login-page d-flex m-0'>
        <div className='login-left w-50 h-100'>
          <RegisterLeftSide />
        </div>
        <div className='login-right w-50 h-100'>
          <RegisterRightSide />
        </div>
    </div>
  )
}

export default FormRegister