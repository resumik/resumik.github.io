import React from 'react'
import { SocialIcon } from 'react-social-icons'
import useIndexStyles from '../styles/Index.styles'
import { react as IndexContent } from '../content/index.md'
import useEnv from '../shared/hooks/useEnv'
import { primaryColor, secondaryColor } from '../styles/constants'

const Index: React.FC = () => {
  const styles = useIndexStyles()
  const env = useEnv()

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1>{env.appName}</h1>
        </header>
        <main className={styles.contents}>
          <IndexContent />
        </main>
        <footer>
          <SocialIcon
            url={env.githubRepo}
            network="github"
            className={styles.repoIcon}
            bgColor={primaryColor}
            fgColor={secondaryColor}
          />
        </footer>
      </div>
    </div>
  )
}

export default Index
