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
            <div>
              <img class="coreRegHeaderImage" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_Logo_dark-bg_circle-green_horizontal-lockup_registered_RGB.svg" alt="TripAdvisor" />
            <div>
            <center>
              <h4>로그인 해주세요.</h4>
            </center>
            </div>
          </div>
          <div>
            <div id="googleSignIn">
              <span className={styles.social_button}>
                <img src="https://static.tacdn.com/img2/google/G_color_40x40.png" className={styles.img} alt="" />
                <span className={styles.text}>Google로 계속하기 </span>
              </span>
            </div>
            <div class="facebook-login-buttons-container">
              <span className={styles.social_button}>
                <img src="https://static.tacdn.com/img2/facebook/icn-FB2.png" className={styles.img} alt="" />
                <span className={styles.text}>Facebook 계정으로 계속하기 </span>
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
