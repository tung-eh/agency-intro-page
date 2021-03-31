import { Box, Container, Heading, ThemeProvider } from 'theme-ui'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import gsap from 'gsap'

import Header from './Header'
import Home from './Home'
import Row from '../components/Row'
import theme from '../theme'

const DefaultPage = ({ name }) => (
  <Box sx={{ bg: 'white' }}>
    <Container sx={{ height: '100vh' }}>
      <Row sx={{ height: '100%', alignItems: 'center' }}>
        <Heading as="h3">This is the {name} page</Heading>
      </Row>
    </Container>
  </Box>
)

function App() {
  useEffect(() => {
    // Prevent content jump when using gsap.from()
    gsap.to('body', { css: { visibility: 'visible' } })
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Box sx={{ position: 'relative', zIndex: 5 }}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/case-studies">
            <DefaultPage name="case studies" />
          </Route>
          <Route exact path="/approach">
            <DefaultPage name="approach" />
          </Route>
          <Route exact path="/services">
            <DefaultPage name="services" />
          </Route>
          <Route exact path="/about-us">
            <DefaultPage name="about" />
          </Route>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
