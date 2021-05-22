import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { secondaryColor } from './constants'


const useIndexStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
    },
    header: {
      textTransform: 'uppercase'
    },
    wrapper: {
      display: 'grid',
      alignContent: 'center',
      '& > *:not(:last-child)': {
        paddingBottom: 15
      }
    },
    contents: {
      fontStyle: 'italic'
    },
    repoIcon: {
      width: '35px !important',
      height: '35px !important',
    },
  })
)

export default useIndexStyles
