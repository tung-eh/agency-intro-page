import { ThemeProvider } from 'theme-ui'
import React from 'react'

import Header from './Header'
import Home from './Home'
import theme from '../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
