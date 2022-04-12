import React from 'react'
import styles from "./TextField.module.css"

const TextField = ({text}) => {
  return (
    <input type="text" placeholder={text} className={styles.input} />
  )
}

export default TextField