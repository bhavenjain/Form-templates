import React from 'react'
import One from './One/One'
import Two from './Two/Two'
import Three from './Three/Three'
import Four from './Four/Four'
import styles from './Preview.module.css'

const Preview = ({ template }) => {
  return (
    <div className={styles.container}>
      <div className={styles.setPos}>
        <h1 className={styles.heading}>Preview</h1>
        <p className={styles.subHeading}>
          You will be able to customize the fields in the later stage.
        </p>
      </div>
      <div className={styles.main}>
        <div className={styles.blueHeader}>
          <h1>Name of the Enquiry Form</h1>
          <h2>One line description of the form</h2>
          <p>Provide the following information to process your application</p>
        </div>
        <div className={styles.form}>
          {template === 1 ? <One /> : ""}
          {template === 2 ? <Two /> : ""}
          {template === 3 ? <Three /> : ""}
          {template === 4 ? <Four /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Preview
