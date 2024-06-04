"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter()
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const Hamburger = () => {
    return (
      <div onClick={handleShowNavbar} className={styles.hamburger}>
        <img src="/more.png" alt="hamburger" width={25} height={25} />
      </div>
    );
  };

  const signIn = () =>{
    router.push('/signin')
  }
  const signUp = () =>{
    router.push('/signup')
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburgerBlock}>
        <div className={styles.logo}>
          {/* <img src="/logo.png" alt="Logo" /> */}
          <p className={styles.newsLetter}>NEWSLETTER</p>
        </div>
        <Hamburger />
      </div>
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
        <button onClick={signIn} className={styles.login}>SignIn</button>
        <button onClick={signUp} className={styles.freeTrial}>SignUp</button>
      </div>
    </nav>
  );
};

export default NavBar;
