import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useWithDocsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateAreas: '"sidebar content"',
      gridAutoColumns: '1fr 3fr'
    },
    sidebar: {
      gridArea: 'sidebar',
    },
    content: {
      gridArea: 'content'
    }
  })
)

export default useWithDocsStyles
