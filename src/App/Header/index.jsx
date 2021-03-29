import { Box, Container, Flex } from 'theme-ui'
import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import HamburgerIcon from './HamburgerIcon'
import Icon from '../../components/Icon'
import Link from '../../components/Link'
import Navigation from './Navigation'
import Row from '../../components/Row'
import useMenuAnimation from './useMenuAnimation'

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location])
  useMenuAnimation(menuOpen)

  return (
    <>
      <Box sx={{ position: 'fixed', width: '100%', zIndex: 10 }}>
        <Container sx={{ height: [96, 128] }}>
          <Row sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Link
                to="/"
                sx={{
                  fontSize: '1.2rem',
                  letterSpacing: '0.5rem',
                  fontWeight: 700,
                }}
              >
                AGENCY.
              </Link>
            </Box>
            <Flex
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                positoin: 'relative',
                width: ['20px', 'auto'],
                mr: ['16px', '24px', 0],
              }}
              onClick={() => setMenuOpen((x) => !x)}
            >
              <HamburgerIcon className="hamburger-open" />
              <Icon
                className="hamburger-close"
                name="arrow-up-circle"
                sx={{
                  position: 'absolute',
                  display: 'none',
                  width: ['48px', '56px', 'auto'],
                }}
              />
            </Flex>
          </Row>
        </Container>
      </Box>
      <Navigation />
    </>
  )
}

export default Header
