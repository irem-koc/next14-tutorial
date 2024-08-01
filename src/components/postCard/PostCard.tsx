import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.pexels.com/photos/27328445/pexels-photo-27328445/free-photo-of-a-couple-holding-hands-in-front-of-a-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link className={styles.readMore} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
