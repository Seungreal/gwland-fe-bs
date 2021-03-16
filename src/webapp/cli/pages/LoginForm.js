import React from 'react'
import styles from './Loginform.module.scss'

export default ()=>{
    return <>
        <div className={styles.wrapper}>
            <div className={styles.login_form}>
                <div className={styles.login_header}>
                    <div>
                        <img src="" alt="brand logo"/>
                    </div>
                </div>
                <div className={styles.login_box}>
                    <form name="loginform" action="/login/v1/login" method="post" onsubmit="return loginCheck(this);">
                        <span class="id"><input type="text" name="id" class="inputV3" title="아이디" value="" placeholder="아이디를 입력해 주세요."/></span>
                        <span class="pass"><input type="password" name="pw" class="inputV3" title="패스워드" value="" placeholder="비밀번호를 입력해 주세요."/></span>
                        
                        <span className={styles.submit}><input type="submit" value="로그인"/></span>
                    </form>
                    <ul class="loginMenu">
                        <li className={styles.join}>
                            <a href="#" title="회원가입" id="member-join" class="gtm-catch-click" data-gtm-cd-23="login_navi" data-gtm-cd-19="button" data-gtm-cd-20="/login" data-gtm-cd-21="1" data-gtm-category="login_navi" data-gtm-action="client.click" data-gtm-label="회원가입">
                                회원 가입
                            </a>
                        </li>
                        <li className={styles.idsearch}>
                            <a id="id-search" href="#" class="gtm-catch-click" data-gtm-cd-23="login_navi" data-gtm-cd-19="button" data-gtm-cd-20="/login" data-gtm-cd-21="1" data-gtm-category="login_navi" data-gtm-action="client.click" data-gtm-label="아이디찾기">
                                아이디 찾기
                            </a>
                        </li>
                        <li className={styles.pwsearch}>
                            <a id="pw-search" href="#" class="gtm-catch-click" data-gtm-cd-23="login_navi" data-gtm-cd-19="button" data-gtm-cd-20="/login" data-gtm-cd-21="1" data-gtm-category="login_navi" data-gtm-action="client.click" data-gtm-label="비밀번호찾기">
                                비밀번호 찾기
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.login_social}>
                    <span className={styles.social_button}>
                        <img src="https://lh3.googleusercontent.com/proxy/k2JxE_ebaMFt4XXBuXAGC8gtdUyEmNIYb_PbWL99d8saL05XL-cMzeUqdbGncjL9wn7hq4xVMpLOk2zqFB9hMp_oGhV34gvEMr5pYkfYKQVxpy1YYOzzjAkEH6NDMZHmz9joR8Jk-wY0bvUTKzZB57AQ5Axg674qn12sfYexFdvA8BO2qiwELcmOruuoDTycDHUybntryvhmJb1-Z3IripAib7cBHdSCUR6lI_Tfm9kcSDEAvjA2E6lan-3ODwtpmjA89Csqb4oSEDhMXfMdvVIo-MVaZkZDEqY" className={styles.img} alt=""/>
                        <span className={styles.text}>
                        <a href="http://localhost:8080/oauth2/authorization/naver">Naver로 계속하기 </a>    
                        </span>
                    </span>
                    <span className={styles.social_button}>
                        <img src="https://lh3.googleusercontent.com/proxy/_50CFRbm3Nwt1OXGIUWRRAyG0lPQTiMIyKrROAaIbbs0LWuMURKDOSUjqMKsFToqfzB9nQnqX5V67STG1pH0P2SqNqIfwL7ZqtCDWeZY8xOez1cvN4ikgyFNGUUztetzZF75FgystvywwG727XZZCm3wavmzCA" className={styles.img} alt=""/>
                        <span className={styles.text}>Kakao로 계속하기 </span>
                    </span>
                    <span className={styles.social_button}>
                        <span className={styles.img}></span>
                        <span className={styles.text}>이메일로 계속하기</span> 
                    </span>
                </div>
            </div>
        </div>
    </>
}