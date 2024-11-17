import React from 'react';
import styles from "./style.module.scss";

export default function Spinner() {
  return (
    <div data-cy="spinner" className={styles.spinner}></div>
  )
}
