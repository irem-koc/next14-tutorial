import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill
          alt=""
          src="https://images.pexels.com/photos/27328445/pexels-photo-27328445/free-photo-of-a-couple-holding-hands-in-front-of-a-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            alt=""
            src="https://images.pexels.com/photos/27328445/pexels-photo-27328445/free-photo-of-a-couple-holding-hands-in-front-of-a-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={50}
            height={50}
          />
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Date</span>
          </div>
          <div className={styles.detailsText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>29032002</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          itaque magnam quas fugit dignissimos quisquam architecto at libero
          quod, corrupti, quibusdam consequatur ipsam expedita deserunt earum!
          Cum provident voluptatibus recusandae!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
