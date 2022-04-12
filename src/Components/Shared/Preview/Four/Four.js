import React from 'react'
import DateField from '../../DateField/DateField'
import TextField from '../../TextField/TextField'
import styles from './Four.module.css'

const Four = () => {
  return (
    <div className={styles.container}>
      <span>1. Email*</span>
      <TextField text='Example - userid@gmail.com' />

      <span>2. Location</span>
      <label className={styles.search}>
        <input type='search' />
        <img src='/images/search.png' alt='Search' />
        Search or enter your location
      </label>

      <span>3. Interview Date</span>
      <DateField />

      <span>4. Interview Time</span>
      <input type='time' className={styles.time} value='12:00' />

      <span>5. Time Zone</span>
      <select className={styles.select}>
        <option value='Search or Select a time zone from below '>
          Search or Select a time zone from below
        </option>
      </select>
      
      <span>6. Interview Medium</span>
      <select className={styles.select}>
        <option value=''>
          Search or Select medium of Interview from below
        </option>
      </select>

      <div className={styles.space}></div>
    </div>
  )
}

export default Four
