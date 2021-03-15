import React from "react";
import styles from "./ModalForm.module.scss";
import { Backdrop } from "components/ui";
import { useCustomState } from "state/state";
import ContactForm from "../ContactForm/ContactForm";

export default () => {
  const [state, actions] = useCustomState();
  return (
    <div className={[styles.wrapper, state.modal && styles.show].join(" ")}>
      <div className={styles.modal}>
        <i onClick={() => actions.toogleModal()} className="las la-times" />
        <ContactForm />
      </div>
      <Backdrop />
    </div>
  );
};
