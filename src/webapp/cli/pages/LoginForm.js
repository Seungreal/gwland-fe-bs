import React from 'react'
import styles from './Loginform.module.scss'

export default ()=>{
    return <>
        <div className={styles.wrapper}>
            <div className={styles.login_form}>
            <br/><br/><br/><br/><br/>
                <div >
                    <img src="https://blog.kakaocdn.net/dn/buWema/btq0nOe9uty/trBSZJKOhCRmC4JkFrODDK/img.png" alt="brand logo"  style={{maxWidth:"355px"}}/>
                </div>
                <div className={styles.login_box}>
                    
                    <ul class="loginMenu">
                        <li className={styles.join}>
                            <h2>
                                간편 로그인
                            </h2>
                            <br/>
                        </li>
                        
                    </ul>
                </div>
                <div className={styles.login_social}>
                    <span className={styles.social_button}>
                        <img src="https://blog.kakaocdn.net/dn/XjEkD/btq0jNBoGW2/KOzAkc6iZGICLWmU4X0mvk/img.png" className={styles.img} alt="naverLogo"/>
                        <span className={styles.text}>
                        <a href="http://localhost:8080/oauth2/authorization/naver">Naver로 계속하기 </a>    
                        </span>
                    </span>
                    <span className={styles.social_button}>
                        <img src="https://blog.kakaocdn.net/dn/dftmIh/btq0n9QY4iP/QaxgN8Kve1aJdSfmviKnK0/img.png" className={styles.img} alt="kakaoLogo"/>
                        <span className={styles.text}>
                        <a href="">Kakao로 계속하기 </a>
                        </span>
                    </span>
                    <span className={styles.social_button}>
                        <img src="https://blog.kakaocdn.net/dn/uLvtD/btq0kDFl0r7/cdK3WhwgFKdDPG7V1wnlv0/img.png" className={styles.img} alt="googleLogo"/>
                        <span className={styles.text}>
                        <a href="http://localhost:8080/oauth2/authorization/google">google로 계속하기 </a>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </>
}