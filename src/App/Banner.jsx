import { Box, Container, Heading, IconButton, Link, Text } from 'theme-ui'
import React from 'react'

import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
import Row from '../components/Row'

const Line = ({ children }) => (
  <Box
    sx={{
      height: [32, 48, 56],
      mb: 2,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Text sx={{ position: 'absolute' }}>{children}</Text>
  </Box>
)

const Banner = () => {
  return (
    <Box sx={{}}>
      <Container sx={{ height: '50vh' }}>
        <Row sx={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Heading
            sx={{
              fontSize: ['1.7rem', '2.4rem', '3rem'],
              lineHeight: ['2.2rem', '3rem', '4.2rem'],
              my: '0.83em',
              mt: [72, 'revert'],
              fontWeight: 700,
              color: 'white',
              mixBlendMode: 'difference',
            }}
          >
            <Line>Creating unique brands is</Line>
            <Line>what we do.</Line>
          </Heading>
          <Box sx={{ width: 256, position: 'relative' }}>
            <Link
              href="/"
              sx={{
                fontSize: ['1.1rem', '1.3rem', '1.6rem'],
                display: 'flex',
                alignItems: 'center',
                fontWeight: 600,
                ':hover > button': {
                  bg: 'black',
                  color: 'white',
                },
              }}
            >
              More about us
              <IconButton
                sx={{
                  p: ['4px', '6px', '12px'],
                  ml: 3,
                  height: [16, 20, 24],
                  width: [16, 20, 24],
                  border: '2px solid black',
                  borderRadius: '50%',
                  boxSizing: 'content-box',
                  transition: '0.4s ease-in-out',
                }}
              >
                <RightArrow />
              </IconButton>
            </Link>
          </Box>
        </Row>
      </Container>
    </Box>
  )
}

export default Banner
