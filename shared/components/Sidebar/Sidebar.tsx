import React from 'react'
import useSidebarStyles from './Sidebar.styles'
import _sidebar from '../../../content/design/_sidebar.md'
import useEnv from '../../hooks/useEnv'

export const Sidebar = () => {
  const styles = useSidebarStyles()
  const { html } = _sidebar
    const env = useEnv()
  return (
    <div className={styles.root}>
      <div className={styles.appName}>{env.appName}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
