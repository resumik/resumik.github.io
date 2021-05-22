import React from 'react'
import { Link } from 'gatsby'

const IndexPage: React.FC = () => {
  return (
    <main>
      <div>home</div>
      <div>
        Soon-to-be the state-of-the-art open-source hyphen-overload resume
        generator.
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </main>
  )
}

export default IndexPage
