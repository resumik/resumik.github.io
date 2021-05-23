import React from 'react'
import index from '../../content/design/tech-stack.md'
import withDocs from '../../shared/hoc/withDocs'

const TechStack = () => {
  const { html } = index
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default withDocs(TechStack)
