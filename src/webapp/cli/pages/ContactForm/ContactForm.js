import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";
import CardButton from "../../CardButton/CardButton";
import { Spinner } from "components/elements";


  
export default ({ style }) => {
  
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [preferedCheck, setPreferedCheck] = useState(false);

  const templateParams = {
    name: name,
    email: email,
    phone: phone,
    message: message,
    email_prefered: preferedCheck ? "Yes" : "No",
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSubmit = () => {
    if (name === "") {
      setStatus("Please enter your name");
      setError(true);
      return;
    }

    if (!validateEmail(email)) {
      setStatus("Incorrect email address");
      setError(true);
      return;
    }

    if (phone === "") {
      setStatus("Please enter your phone");
      setError(true);
      return;
    }

    setSending(true);
    emailjs
      .send(
        "SERVICE ID",
        "TEMPLATE ID",
        templateParams,
        "USER ID"
      )
      .then(
        (response) => {
          setSending(false);
          setError(false);
          setStatus("Your message has been sent!");
        },
        (err) => {
          setSending(false);
          setError(true);
          setStatus("Sorry. There is an error: " + err.text);
        }
      );
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setPreferedCheck(false);
  };

  const loading = sending && (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );

  return (
    
    <form style={style} className={styles.wrapper}>
      {loading}
      <CardButton
        click={onSubmit}
        btn_after="&#xf107;"
        btn_text="Send message"
        btn_type="solid-color-tb"
        btn_hoverType="solid-gray-tb"
        btn_align="stretch"
        padding
      >
        <div className={styles.contact_form}>
          <span className={[styles.status, error && styles.error].join(" ")}>
            {status}
          </span>
            <center>
              <h2>Triport<br/></h2>
            </center>
            <div className={styles.brand_img}>
              <img class="coreRegHeaderImage" src="https://postfiles.pstatic.net/MjAyMTAzMTVfMTk0/MDAxNjE1Nzg3MTUwNjIz.LaUs3o87AtC_cVRDlkN4UstfxM3Hs3l9jcbrDlsw_jEg.tvGYHUME5Upi2hfu-gZpdgv8DaEEDYXHUvdm_DK5uIIg.PNG.qkrtnghsla/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-03-15_%EC%98%A4%ED%9B%84_2.44.29.png?type=w580"  alt=""/>
            <div>
            <center>
              <h4>로그인을 해주세요.<br/></h4>
            </center>
            </div>
          </div>
          <div>
            <div id="naverLogin">
              <span className={styles.social_button}>
                <img src="https://i.pinimg.com/originals/fb/71/04/fb71048e03a5ada757f70d61b583d0bf.png" className={styles.img} alt='naver' />
                <span className={styles.text}>
                  <a href="http://localhost:8080/oauth2/authorization/naver">Naver로 계속하기 </a>
                </span>
              </span>
            </div>
            <div class="facebook-login-buttons-container">
              <span className={styles.social_button}>
                <img src="https://lh3.googleusercontent.com/proxy/2XlH4vKM-bXNd5N6AlBTFbySWiD9d7Irc9L4pylxfTF3VhepTGVTEXXxUrOzX_6VH6fTN5EEYika3wn5mWYvtiBoJsOuKPa63k9MDdNZZ9sXmPC5n28saSCKD4kQCvEJhrnJmWtIJgAfpSZckYnfAsIrBBqY59YuH-D4rd1YxjMwz3PfLyNq2PAMX8uSVz9Ju4VBEnj9WrF31c7cpB4CnkVVygd57FPD_Chrnh002sI3AfjtDZvGenwYaak4E-ZM4YYWLHMwoDnKHTptxN4e2OZP4ni0H27V2beTVIjkCVJQkd7TYhYKpm1Bt8vx2leS0kv1-w7HfmEicbByz6ncinE030VTsK64lW0tji2ap--zPCCBFA" className={styles.img} alt="kakao" />
                <span className={styles.text}>Kakao로 계속하기 </span>
              </span>
            </div>
            <div>
              <span className={styles.social_button}>
                <span className={styles.img}></span>
                <span className={styles.text}>이메일로 계속하기</span>
              </span>
            </div>
          </div>
        </div>
      </CardButton>
    </form>
  );
};
