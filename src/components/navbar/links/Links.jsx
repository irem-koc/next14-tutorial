"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./links.module.css";
import NavLinks from "./navLinks/navLinks";
const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/blog", title: "Blog" },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLinks key={index} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ path: "/admin", title: "Admin" }} />}

            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ path: "/login", title: "Login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src={"/menu.png"}
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((open) => !open)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, index) => (
            <NavLinks item={link} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
