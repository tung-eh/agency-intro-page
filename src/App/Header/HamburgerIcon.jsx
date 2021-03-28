import { Box, Text } from 'theme-ui'
import React from 'react'

const Stick = ({ sx, ...props }) => (
  <Text
    sx={{
      mb: '0.3rem',
      bg: 'black',
      height: 2,
      width: '100%',
      display: 'block',
      ...sx,
    }}
    {...props}
  />
)

const HamburgerIcon = () => (
  <Box sx={{ width: [20, 25] }}>
    <Stick />
    <Stick />
  </Box>
)

export default HamburgerIcon
