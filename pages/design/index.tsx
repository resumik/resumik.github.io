import dynamic from 'next/dynamic'
import React from 'react'
import withDocs from '../../shared/hoc/withDocs'
import index from '../../content/design/index.md'

const Design = () => {
  const { html } = index
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default withDocs(Design)
