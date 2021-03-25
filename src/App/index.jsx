import { ThemeProvider } from 'theme-ui'
import React from 'react'

import Banner from './Banner'
import Cases from './Cases'
import Header from './Header'
import theme from '../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Cases />
    </ThemeProvider>
  )
}

export default App
