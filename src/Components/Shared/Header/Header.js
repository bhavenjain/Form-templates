import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.one}>
        <div className={styles.center}></div>
        <div className={`${styles.circle} ${styles.selected}` }>
          <img src="/images/tick.png" alt="Tick" />
        </div>
        <p>Form Selection</p>
        <div className={styles.line}></div>
        <div className={styles.circle}></div>
        <p>Set Up</p>
        <div className={styles.line}></div>
        <div className={styles.circle}></div>
        <p>Form Creation</p>
        <div className={styles.line}></div>
        <div className={styles.circle}></div>
        <p>Review</p>
      </div>
      <div className={styles.two}>
        <img src="/images/cross.png" alt="Cross" />
      </div>
    </div>
  )
}

export default Header
