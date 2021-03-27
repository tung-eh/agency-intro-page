import { Box, Container, Heading, Link, Text } from 'theme-ui'
import React from 'react'

import Icon from '../../components/Icon'
import Row from '../../components/Row'

const Line = ({ children }) => (
  <Box
    className="line"
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
    <Box sx={{ bg: 'white' }}>
      <Container sx={{ height: '50vh' }}>
        <Row sx={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Heading
            sx={{
              fontSize: ['1.7rem', '2.4rem', '3rem'],
              lineHeight: ['2.2rem', '3rem', '4.2rem'],
              mt: [72, 'revert'],
              fontWeight: 700,
              color: 'white',
              mixBlendMode: 'difference',
              zIndex: 20,
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
                ':hover > svg': {
                  bg: 'black',
                  color: 'white',
                },
              }}
            >
              More about us
              <Icon
                name="arrow-right"
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
              />
            </Link>
          </Box>
        </Row>
      </Container>
    </Box>
  )
}

export default Banner
