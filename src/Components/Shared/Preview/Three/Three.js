import React from 'react'
import styles from './Three.module.css'

const Three = () => {
  return (
    <div className={styles.container}>
      <span>
        1. Tell me about a time you were asked to do something you had never
        done before. How did you react? What did you learn?
      </span>
      <input
        type='text'
        placeholder='Enter a description for the long answer'
        className={styles.texts}
      />
      <div className={styles.limit}>
        <p>300 word limit</p>
      </div>
      <span>
        2. Tell me about the last time something significant didn’t go according
        to plan at work. What was your role? What was the outcome?
      </span>
      <input
        type='text'
        placeholder='Enter a description for the long answer'
        className={styles.texts}
      />
      <div className={styles.limit}>
        <p>300 word limit</p>
      </div>
      <span>
        3. What are the three things that are most important to you in a job?
      </span>
      <input
        type='text'
        placeholder='Enter a description for the long answer'
        className={styles.texts}
      />
      <div className={styles.limit}>
        <p>300 word limit</p>
      </div>
    </div>
  )
}

export default Three
