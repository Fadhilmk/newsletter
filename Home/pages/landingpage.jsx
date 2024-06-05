import React from 'react'
import styles from '../styles/Home.module.css';
import NavBar from '../component/navbar';
import '../../click.css'
function LandingPage() {
  return (
    <div>
      <div>
        <title>My Landing Page</title>
        <meta name="description" content="Welcome to my Next.js landing page" />
        <link rel="icon" href="/favicon.ico" />
      </div>

      <NavBar />

      <section className={styles.section1}>
        <p className={styles.title}>WELCOME TO THE NEWSLETTER PLATFORM</p>
        <p className={styles.title}>NEWSLETTER PLATFORM BUILT FOR GROWTH.</p>
      </section>
      <section className={styles.section2}>
        <p className={styles.title}>WELCOME TO THE NEWSLETTER PLATFORM</p>
        <p className={styles.title}>NEWSLETTER PLATFORM BUILT FOR GROWTH.</p>
      </section>
    </div>
  )
}

export default LandingPage

