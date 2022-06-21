import React from "react";

import styles from "../styles/modules/button.module.scss";

const Button = ({ children }) => {
  return <div className={styles.button}>{children}</div>;
};

const SelectButton = ({ children }) => {
  return <select className={styles.button}>{children}</select>;
};

export { SelectButton };

export default Button;
