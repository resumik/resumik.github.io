import React from 'react'
import useIndexStyles from '../styles/Index.styles'

const Index: React.FC = () => {
  const styles = useIndexStyles()
  
  return (
    <>
      <header>
        <h1>Resumik</h1>
      </header>
      <main>
        <div>
          The soon-to-be state-of-the-art open-source hyphens-overload resume
          generator.
        </div>
        <div>
          GitHub is our home. We use it for a plethora of things:
          <ul>
            <li>Commiting code</li>
            <li>Organizing work</li>
            <li>Hosting this very site</li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Index
