import React from "react";
import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
      <br />
      테스트 <span className="something">테스트</span>
    </div>
  );
};

export default CSSModule;
