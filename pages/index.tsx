import React from 'react'
import { SocialIcon } from 'react-social-icons'
import useIndexStyles from '../styles/Index.styles'
import index from '../content/index.md'
import useEnv from '../shared/hooks/useEnv'
import { primaryColor, secondaryColor } from '../styles/constants'
import Button from '../shared/components/Button'

const Index: React.FC = () => {
  const styles = useIndexStyles()
  const env = useEnv()
  const {
    html,
    attributes: { designDocumentUrl },
  } = index

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1>{env.appName}</h1>
        </header>
        <main
          className={styles.contents}
          dangerouslySetInnerHTML={{ __html: html }}
        ></main>
        <footer className={styles.social}>
          <a href={env.githubRepo}>
            <Button>GitHub</Button>
          </a>
          <a href={designDocumentUrl}>
            <Button>Design document</Button>
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Index
