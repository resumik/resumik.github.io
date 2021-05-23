import React from 'react'
import content from '../../content/design/different-how.md'
import withDocs from '../../shared/hoc/withDocs'

const DifferentHow = () => {
  const { html } = content
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default withDocs(DifferentHow)
