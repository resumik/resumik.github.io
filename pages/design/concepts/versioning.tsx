import React from 'react'
import content from '../../../content/design/concepts/versioning.md'
import withDocs from '../../../shared/hoc/withDocs'

const Versioning = () => {
  const { html } = content
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default withDocs(Versioning)
