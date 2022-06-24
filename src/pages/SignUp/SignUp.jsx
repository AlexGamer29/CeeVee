import React from 'react'
import { FormSignUp } from '../../components/FormSignUp/FormSignUp'
import { FooterContainer } from '../../components/FooterContainer/FooterContainer';
import './SignUp.css'

const SignUp = () => {
  return (
    <>
      <div className="login__container">
        <div className="login__header">
          <div className="login__form">
            <FormSignUp />
          </div>
        </div>
      </div>
      <div className="footer">
        <FooterContainer />
      </div>
    </>
  )
}

export default SignUp