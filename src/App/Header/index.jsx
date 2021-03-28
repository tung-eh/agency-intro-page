import { Box, Container } from 'theme-ui'
import React from 'react'

import Link from '../../components/Link'
import Navigator from './Navigator'
import Row from '../../components/Row'

const Header = () => {
  return (
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
          <Navigator />
        </Row>
      </Container>
    </Box>
  )
}

export default Header
