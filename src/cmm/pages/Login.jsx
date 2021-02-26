import React from 'react'

export const Login = ()=>{
    return <><div className="login-popup">
      
    <div className="login-popup-wrap">
      <div className="title-wrap">
        <h2>Login</h2><i className="close-button flaticon-close"></i>
      </div>
      <div className="login-content">
        <form className="form">
          <input type="text" name="email" value="" size="40" placeholder="아이디를 입력해주세요." aria-required="true" className="form-row form-row-first"/>
          <input type="text" name="password" value="" size="40" placeholder="비밀번호를 입력해주세요." aria-required="true" className="form-row form-row-last"/>
        </form>
        <div className="remember">
          <div className="checkbox">
            <input id="checkbox30" type="checkbox" value="None" name="check"/>
            <label htmlFor="checkbox30">Remember Me</label>
          </div><a href="#">비밀번호 찾기</a>
        </div><a href="#" className="cws-button gray alt full-width mt-20">로그인</a>
      </div>
      <div id="naverIdLogin"></div>
      <div className="login-bot">
        <p>아이디가 없습니까?&nbsp;&nbsp;<a href="#">가입하러 가기</a></p>
      </div>
    </div>
  </div>
  </>
}