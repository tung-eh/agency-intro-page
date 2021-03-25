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
    gsap
      .timeline()
      .from('.line span', 1.8, {
        y: 100,
        ease: 'power4.out',
        delay: 1,
        skewY: 0.7,
        stagger: 0.3,
      })
      .to('.overlay-top', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: 0.4,
      })
      .to('.overlay-bottom', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        delay: -0.8,
        stagger: 0.4,
      })
      .to('.intro-overlay', 0, { css: { display: 'none' } })
      .from('.case-image img', 1.6, {
        scale: 1.4,
        ease: 'expo.inOut',
        delay: -2,
        stgger: 0.4,
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
