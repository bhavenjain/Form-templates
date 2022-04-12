import React from 'react'
import FileField from '../../FileField/FileField'
import styles from './Two.module.css'

const Two = () => {
  return (
    <div className={styles.container}>
        <span>1. 10th Marksheet*</span>
        <FileField />
        <span>2. 12th Marksheet*</span>
        <FileField />
        <span>3. Graduation Marksheet*</span>
        <FileField />
        <span>4. Post Graduation Marksheet</span>
        <FileField />
        <span>5. Offer Letter*</span>
        <FileField />
        <span>6. Salary Slips*</span>
        <FileField />
        <span>7. Bank Statement*</span>
        <FileField />
        <span>8. Increment Letter (if any)</span>
        <FileField />
        <span>9. Others (if any)</span>
        <FileField />
        <div className={styles.space}></div>
    </div>
  )
}

export default Two