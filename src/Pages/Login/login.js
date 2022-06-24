import React from 'react'
import FormLogin from '../../components/FormLogin'
import style from './Login.module.css'

const login = () => {
  return (
    <div className={`pagelogin ${style.PageLogin}`}>
        <FormLogin />
    </div>
    
  )
}

export default login