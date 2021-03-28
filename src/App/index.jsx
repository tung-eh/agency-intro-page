import { Container, Heading, ThemeProvider } from 'theme-ui'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'

import Header from './Header'
import Home from './Home'
import Row from '../components/Row'
import theme from '../theme'

const DefaultPage = ({ name }) => (
  <Container sx={{ height: '100vh' }}>
    <Row sx={{ height: '100%', alignItems: 'center' }}>
      <Heading as="h3">This is the {name} page</Heading>
    </Row>
  </Container>
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
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
      </Router>
    </ThemeProvider>
  )
}

export default App
