import React from 'react'
import styles from "./DateField.module.css"

const DateField = ({text}) => {
  return (
    <input type="date" placeholder={text} className={styles.input} />
  )
}

export default DateField