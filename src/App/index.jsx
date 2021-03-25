import { ThemeProvider } from 'theme-ui'
import React, { useEffect } from 'react'
import gsap from 'gsap'

import Banner from './Banner'
import Cases from './Cases'
import Header from './Header'
import Intro from './Intro'
import theme from '../theme'

function App() {
  useEffect(() => {
    gsap.timeline().from('.line span', 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 0.7,
      stagger: 0.3,
    })
  }, [])

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
