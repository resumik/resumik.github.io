import Link from 'next/link'
import React from 'react'
import index from '../content/index.md'
import { AnchorButton, Button } from '../shared/components/Button/Button'
import useEnv from '../shared/hooks/useEnv'
import useIndexStyles from '../styles/Index.styles'

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
          <Link href="/design" passHref>
            <AnchorButton>Design document</AnchorButton>
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default Index
