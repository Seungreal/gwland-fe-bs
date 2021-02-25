import React from 'react'

export const Login = ()=>{
    return <div className="login-popup">
    <div className="login-popup-wrap">
      <div className="title-wrap">
        <h2>Login</h2><i className="close-button flaticon-close"></i>
      </div>
      <div className="login-content">
        <form className="form">
          <input type="text" name="email" value="" size="40" placeholder="Enter Your Email ..." aria-required="true" className="form-row form-row-first"/>
          <input type="text" name="password" value="" size="40" placeholder="Enter Your Password ..." aria-required="true" className="form-row form-row-last"/>
        </form>
        <div className="remember">
          <div className="checkbox">
            <input id="checkbox30" type="checkbox" value="None" name="check"/>
            <label htmlFor="checkbox30">Remember Me</label>
          </div><a href="#">Forgot Password ?</a>
        </div><a href="#" className="cws-button gray alt full-width mt-20">Login now</a>
      </div>
      <div className="login-bot">
        <p>No account yet? <a href="#">Register now</a></p>
      </div>
    </div>
  </div>
}