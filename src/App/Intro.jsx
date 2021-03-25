import { Box } from 'theme-ui'
import React from 'react'

const OverlayTop = ({ sx }) => (
  <Box
    className="overlay-top"
    sx={{
      position: 'absolute',
      height: '100%',
      width: ['100vw', '100vw', 'calc(100vw / 3)'],
      bg: 'black',
      bottom: 0,
      left: 0,
      ':nth-child(2)': {
        left: 'calc(100vw /  3)',
      },
      ':nth-child(3)': {
        left: 'calc(100vw * 2 / 3)',
      },
      ':nth-child(n + 2)': {
        display: ['none', 'none', 'block'],
      },
    }}
  />
)

const OverlayBottom = () => (
  <Box
    className="overlay-bottom"
    sx={{
      position: 'absolute',
      height: '100%',
      width: ['100vw', '100vw', 'calc(100vw / 3)'],
      bg: 'black',
      bottom: 0,
      right: [0, 0, 'calc(100vw * 2 / 3)'],
      zIndex: 10,
      ':nth-child(2)': {
        right: [0, 0, 'calc(100vw / 3)'],
        top: ['100%', '100%', 'unset'],
      },
      ':nth-child(3)': {
        right: 0,
        top: ['200%', '200%', 'unset'],
      },
    }}
  />
)

const Intro = () => {
  return (
    <Box>
      <Box sx={{ height: '50vh', position: 'absolute', width: '100%' }}>
        <OverlayTop />
        <OverlayTop />
        <OverlayTop />
      </Box>
      <Box
        sx={{ height: '50vh', position: 'absolute', width: '100%', bottom: 0 }}
      >
        <OverlayBottom />
        <OverlayBottom />
        <OverlayBottom />
      </Box>
    </Box>
  )
}

export default Intro
