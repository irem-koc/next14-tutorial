import Image from "next/image"
import styles from "./about.module.css"
const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/27298696/pexels-photo-27298696/free-photo-of-a-swan-is-standing-on-the-ice-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill alt="about" />

      </div>
    </div>
  )
}

export default AboutPage