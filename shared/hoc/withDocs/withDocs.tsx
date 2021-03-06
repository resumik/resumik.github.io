import React from 'react'
import Sidebar from '../../components/Sidebar'
import useWithDocsStyles from './withDocs.styles'

export const withDocs = (Component: React.FC) => (props) => {
  const styles = useWithDocsStyles()

  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Component />
      </div>
    </div>
  )
}
