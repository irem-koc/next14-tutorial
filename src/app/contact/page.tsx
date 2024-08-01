"use client";
import Image from "next/image";
import styles from "./contact.module.css";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="" fill />
      </div>
      <form
        onSubmit={() => console.log("hello")}
        className={styles.formContainer}
      >
        <input required type="text" placeholder="Name and Surname" />
        <input required type="text" placeholder="Email address" />
        <input type="text" placeholder="Phone Number (Optional)" />
        <textarea
          rows={5}
          placeholder="Message"
          required
          name=""
          id=""
        ></textarea>
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
