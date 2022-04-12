import React, {useState} from 'react'
import Header from '../../Components/Shared/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import Sidebar from '../../Components/Shared/Sidebar/Sidebar'
import Preview from '../../Components/Shared/Preview/Preview'
import styles from './Templates.module.css'

const Templates = () => {
  const [template, setTemplate] = useState(1)

  return (
    <div className={styles.container}>
      {/* Header */}
      <Header />

      <div className={styles.main}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <Sidebar template={template} setTemplate={setTemplate} />
        </div>

        {/* Preview */}
        <div className={styles.preview}>
          <Preview template={template} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Templates
