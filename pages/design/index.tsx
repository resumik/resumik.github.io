import dynamic from 'next/dynamic'
import React from 'react'
import withDocs from '../../shared/hoc/withDocs'

const TechStack = dynamic(() => import('../../src/docs/TechStack'))

const Design = () => {
  return (
    <div>
      design
    </div>
  )
}

export default withDocs(Design)
