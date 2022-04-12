import React from 'react'
import styles from './FileField.module.css'

const FileField = () => {
  return (
    <label className={styles.field}>
      <input type='file' />
      <img src="/images/Vector.png" alt="Attach File" />
      Attach file upto 5kb
    </label>
  )
}

export default FileField
