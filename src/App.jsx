import { Box, Heading, ThemeProvider } from 'theme-ui'
import React from 'react'

import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box m={10}>
        <Heading color="tomato">Hello world</Heading>
      </Box>
    </ThemeProvider>
  )
}

export default App
