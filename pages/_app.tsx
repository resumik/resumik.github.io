import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../styles/theme'
import { CssBaseline } from '@material-ui/core'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
