import green from '@material-ui/core/colors/green'
import purple from '@material-ui/core/colors/purple'
import { createMuiTheme } from '@material-ui/core/styles'
import {
  accentColor,
  backgroundColor,
  primaryColor,
  primaryLightColor,
} from './constants'

const theme = createMuiTheme({
  spacing: 4,
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
        a: {
          color: accentColor,
          fontWeight: 'bolder',
          textDecoration: 'none',
        },
        ul: {
          margin: 0,
        },
      },
    },
  },
  palette: {},
})

export default theme
