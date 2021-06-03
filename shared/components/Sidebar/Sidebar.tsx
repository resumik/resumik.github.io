import React from 'react'
import useSidebarStyles from './Sidebar.styles'
import MDXComponent from '../../../content/design/_sidebar.md'
import useEnv from '../../hooks/useEnv'

export const Sidebar = () => {
  const styles = useSidebarStyles()
  const env = useEnv()
  return (
    <div className={styles.root}>
      <div className={styles.appName}>{env.appName}</div>
      <div>
        <MDXComponent />
      </div>
    </div>
  )
}
