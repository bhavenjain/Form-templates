import React from 'react'
import DateField from '../../DateField/DateField'
import TextField from "../../TextField/TextField"
import styles from "./One.module.css"

const One = () => {
  return (
    <div className={styles.container}>
        <span>1. Name*</span>
        <TextField text="Enter a Valid Salary in numbers e.g 50,000/-" />
        <span>2. Email*</span>
        <TextField text="Example - userid@gmail.com" />
        <span>3. Date of Birth</span>
        <DateField />
        <span>4. Contact No</span>
        <TextField text="Enter your 10 digit contact no" />
    </div>
  )
}

export default One