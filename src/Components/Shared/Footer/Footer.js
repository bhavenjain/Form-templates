import React from 'react'
import Button from "../Button/Button"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <Button text="Next" />
    </div>
  )
}

export default Footer