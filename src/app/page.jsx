import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          assumenda nostrum modi molestias quas architecto.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact Us</button>
        </div>
        <div className={styles.brands}>
          <Image
            src={"/brands.png"}
            alt="brands"
            fill
            className={styles.brandImage}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={"/hero.gif"} alt="brands" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
