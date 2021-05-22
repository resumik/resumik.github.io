import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useIndexStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      justifyContent: 'center',
      height: '100vh',
    },
  })
)

export default useIndexStyles
