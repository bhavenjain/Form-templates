import React from 'react'
import styles from './SelectForm.module.css'

const SelectForm = ({ heading, text, template, val, setTemplate }) => {
  
  return (
    <div
      className={`${styles.container} ${
        (JSON.stringify(template) === JSON.stringify(val) && val !== undefined) ? styles.selectedContainer : ''
      }`}

      onClick={() => setTemplate(val)}
    >
      <div
        className={`${styles.grayBox} ${
          (JSON.stringify(template) === JSON.stringify(val) && val !== undefined) ? styles.blueBox : ''
        }`}
      ></div>
      <div className={styles.content}>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.subHeading}>{text}</p>
      </div>
    </div>
  )
}

export default SelectForm
