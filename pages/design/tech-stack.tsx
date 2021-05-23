import React from 'react'
import content from '../../content/design/tech-stack.md'
import withDocs from '../../shared/hoc/withDocs'

const TechStack = () => {
  const { html } = content
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default withDocs(TechStack)
