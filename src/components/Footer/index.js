import React from 'react';
import Link from 'next/link'
import Svg from '@/components/Svg';
import styles from "./style.module.scss";

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Svg name="logo" width={80} height={20} />
        </Link>
        <p>&copy; {getYear} Michael Allen</p>
      </div>
    </div>
  )
}
