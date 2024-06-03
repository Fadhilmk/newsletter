"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const Hamburger = () => {
    return (
      <div onClick={handleShowNavbar} className={styles.hamburger}>
        <img src="/menu.png" alt="hamburger" width={25} height={25} />
      </div>
    );
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* <img src="/logo.png" alt="Logo" /> */}
        <p className={styles.newsLetter}>NEWSLETTER</p>
      </div>
      <Hamburger />
      <ul className={`${styles.navLinks} ${showNavbar ? styles.show : ""}`}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles.navItem} ${styles.dropdown}`}>
          <Link href="/features">Features</Link>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/features/feature1">Feature 1</Link></li>
            <li><Link href="/features/feature2">Feature 2</Link></li>
            <li><Link href="/features/feature3">Feature 3</Link></li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <Link href="/network">Ad Network</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/resources">Resources</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/company">Company</Link>
        </li>
      </ul>
      <div className={styles.buttons}>
        <button className={styles.login}>Login</button>
        <button className={styles.freeTrial}>Free Trial</button>
      </div>
    </nav>
  );
};

export default NavBar;
