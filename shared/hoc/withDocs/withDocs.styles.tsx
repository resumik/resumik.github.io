import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useWithDocsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateAreas: '"sidebar content"',
      gridAutoColumns: 'minmax(100px, 200px) minmax(200px, 600px)',
      height: '100vh',
      '& h1': {
        fontSize: 32
      }
    },
    sidebar: {
      gridArea: 'sidebar',
      borderRight: '1px solid lightgray',
      padding: theme.spacing(8),
    },
    content: {
      padding: theme.spacing(8),
      gridArea: 'content',
      textAlign: 'justify',
    },
  })
)

export default useWithDocsStyles
