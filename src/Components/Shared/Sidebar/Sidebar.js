import React from 'react'
import SelectForm from '../../Private/SelectForm/SelectForm'
import { data } from '../../../util/data'
import styles from './Sidebar.module.css'

const Sidebar = ({template, setTemplate}) => {
  return (
    <div className={styles.container}>
      <SelectForm heading={data[0].heading} text={data[0].sub} />
      <div className={styles.heading}>
        <p className={styles.explore}>Explore the following Templates:</p>
      </div>
      <SelectForm heading={data[1].heading} text={data[1].sub} template={template} val={1} setTemplate={setTemplate} />
      <SelectForm heading={data[2].heading} text={data[2].sub} template={template} val={2} setTemplate={setTemplate} />
      <SelectForm heading={data[3].heading} text={data[3].sub} template={template} val={3} setTemplate={setTemplate} />
      <SelectForm heading={data[4].heading} text={data[4].sub} template={template} val={4} setTemplate={setTemplate} />
      <div className={styles.space}></div>
    </div>
  )
}

export default Sidebar
