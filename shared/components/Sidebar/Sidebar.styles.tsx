import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { primaryLightColor, secondaryColor } from '../../../styles/constants'

const useSidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& ul': {
        listStyleType: 'none',
        paddingLeft: 0,
      },
      '& ul ul': {
        paddingLeft: theme.spacing(2)
      },
      '& li li': {
        '&::before': {
          content: '"- "',
        },
      },
      '& a': {
        color: primaryLightColor,
      },
    },
    appName: {
      textTransform: 'uppercase',
      fontSize: 24,
      textAlign: 'center',
      marginBottom: theme.spacing(4),
      fontFamily: 'Montserrat, sans-serif'
    }
  })
)

export default useSidebarStyles
