import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.about}>About Agency</h2>
        <h1 className={styles.header}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.subText}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision We're world's Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.colContainer}>
          <div className={styles.col}>
            <h2 className={styles.colHeader}>10 K+</h2>
            <p>Year of experience</p>
          </div>
          <div className={styles.col}>
            <h2 className={styles.colHeader}>234 K+</h2>
            <p>People reached</p>
          </div>
          <div className={styles.col}>
            <h2 className={styles.colHeader}>5 K+</h2>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="about" fill />
      </div>
    </div>
  );
};

export default AboutPage;
