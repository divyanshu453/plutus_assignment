'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMoon}>🌙</span>
          MoonEX
        </Link>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#features">Features</Link>
          <Link href="#faqs">FAQs</Link>
          <Link href="#contact">Contact Us</Link>
          <Link href="/users">API CALL</Link>
          
        </nav>

        <button className={styles.launchBtn}>
          Launch App
        </button>

        <button
          className={styles.menuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}