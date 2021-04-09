import React from "react";
import { Layout } from "webapp/cmm/layouts";
import styles from "./Header.module.scss";

export default ({ children, img }) => {
  return (
    <Layout
      style={{
        background: "url(" + img + ") center/cover"
      }}
      col="1"
      mode="dark"
    >
      <div className={styles.header}>
        <h1>{children}</h1>
      </div>
    </Layout>
  );
};
