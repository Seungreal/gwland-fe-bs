import React from "react";
import styles from "./Logo.module.scss";
import THEME from "../../../state/theme";

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
    style={{ borderColor: THEME.color }}
  >
    <img src="https://blog.kakaocdn.net/dn/cbLwCj/btq0jNgWZKH/PKb61CR5YgBl7JBR6olER0/img.png"/>
  </figure>
);
