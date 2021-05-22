import green from '@material-ui/core/colors/green'
import purple from '@material-ui/core/colors/purple'
import { createMuiTheme } from '@material-ui/core/styles'
import { backgroundColor, primaryColor } from './constants'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: backgroundColor,
          height: '100%',
          fontFamily: 'Raleway, sans-serif',
          color: primaryColor,
        },
        html: {
          height: '100%',
        },
        h1: {
          margin: 0,
          fontFamily: 'Montserrat',
          fontSize: 46,
          lineHeight: '46px',
          letterSpacing: -2,
        },
      },
    },
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
})

export default theme
