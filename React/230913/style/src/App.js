import styles from "./App.module.css";
import React from "react";
import Question from "./Components/Question";

//import 순서에 따라 스타일이 달라짐 - > 문제!!
const App = () => {
  return (
    <>
      <h1>하한</h1>
       <nav className={styles.box}>
        <ul>
          <li id="detail" className={styles.text}>
            상세정보
          </li>
          <li id="qa" className={styles.text}>
            Q&A
          </li>
          <li id="review" className={styles.text}>
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;