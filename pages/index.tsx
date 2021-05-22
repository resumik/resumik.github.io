import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { githubRepo } from '../env'
import useIndexStyles from '../styles/Index.styles'

const Index: React.FC = () => {
  const styles = useIndexStyles()

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1>Resumik</h1>
        </header>
        <main className={styles.contents}>
            The soon-to-be state-of-the-art open-source hyphens-overload resume
            generator.
        </main>
        <footer>
          <SocialIcon
            url={githubRepo}
            network="github"
            className={styles.repoIcon}
          />
        </footer>
      </div>
    </div>
  )
}

export default Index
