import { ThemeProvider } from 'theme-ui'
import React from 'react'

import Banner from './Banner'
import Cases from './Cases'
import Header from './Header'
import Intro from './Intro'
import theme from '../theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Intro />
      <Header />
      <Banner />
      <Cases />
    </ThemeProvider>
  )
}

export default App
