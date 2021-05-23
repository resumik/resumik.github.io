import React from 'react'
import content from '../../content/design/index.md'
import withDocs from '../../shared/hoc/withDocs'

const Design = () => {
  const { html } = content
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default withDocs(Design)
