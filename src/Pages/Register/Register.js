import React from 'react'
import FormRegister from '../../components/FormRegister'
import style from './Register.module.css'

const Register = () => {
  return (
    <div className={`pagelogin ${style.PageRegister}`}>
        <FormRegister />
    </div>
  )
}

export default Register