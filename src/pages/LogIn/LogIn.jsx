import React from 'react'
import { FormLogin } from '../../components/FormLogin/FormLogin'
import { FooterContainer } from '../../components/FooterContainer/FooterContainer';
import './LogIn.css'

const LogIn = () => {
  return (
    <>
      <div className="login__container">
        <div className="login__header">
          <div className="login__form">
            <FormLogin/>
          </div>
        </div>
      </div>
      <div className="footer">
        <FooterContainer />
      </div>
    </>
  )
}

export default LogIn