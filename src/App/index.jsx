import { ThemeProvider } from 'theme-ui'
import React from 'react'

import Banner from './Banner'
import Header from './Header'
import theme from '../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
    </ThemeProvider>
  )
}

export default App
