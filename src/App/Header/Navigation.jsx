import { Box, Container, Flex, Link } from 'theme-ui'
import React from 'react'

const NavColumn = ({ width, label, children, ...props }) => (
  <Box sx={{ width: ['100%', width] }}>
    <Box
      sx={{
        mb: ['1.2rem', '1.4rem', '3rem'],
        fontSize: ['0.875rem', '1rem', '1.2rem'],
      }}
    >
      {label}
    </Box>
    <Box {...props}>{children}</Box>
  </Box>
)

const ContactGroup = ({ label, children, ...props }) => (
  <Box
    sx={{
      my: '1em',
      width: '50%',
      '&nth-child(2)': { display: ['none', 'none', 'block'] },
      '> div': {
        fontSize: ['1rem', '1.2rem', '1.4rem'],
        fontWeight: 300,
        mb: ['0.875rem', '1rem', '1.2rem'],
        '&:first-child': {
          fontWeight: 600,
        },
      },
    }}
  >
    <Box>{label}</Box>
    {children}
  </Box>
)

const Navigation = () => (
  <Box
    sx={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      bg: '#fff3d8',
      a: {
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          width: 0,
          height: '2px',
          display: 'block',
          mt: '5px',
          right: 0,
          bg: 'black',
          transition: '0.4s ease',
        },
        '&:hover:after': {
          width: '100%',
          left: 0,
        },
      },
    }}
  >
    <Container>
      <Flex
        sx={{
          flexDirection: ['column', 'column', 'row'],
          px: [3, 4],
          py: '125px',
        }}
      >
        <NavColumn
          label="Menu"
          width="45%"
          sx={{
            '> div': {
              display: 'block',
              mb: ['1.6rem', '2.4rem'],
              fontSize: ['2rem', '2.8rem'],
              fontWeight: 600,
            },
          }}
        >
          <Box>
            <Link to="/case-studies">Case Studies</Link>
          </Box>
          <Box>
            <Link to="/approach">Approach</Link>
          </Box>
          <Box>
            <Link to="/services">Services</Link>
          </Box>
          <Box>
            <Link to="/about-us">About us</Link>
          </Box>
        </NavColumn>
        <NavColumn
          label="Contact"
          width="55%"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: ['space-between', 'space-between', 'flex-start'],
          }}
        >
          <ContactGroup label="Email">
            <Box>
              <Link to="/contact">Get in touch with us</Link>
            </Box>

            <Box>
              <Link to="/audit">Get a free audit</Link>
            </Box>
          </ContactGroup>
          <ContactGroup label="Headquarter">
            <Box>Route du Jura 49</Box>
            <Box>1700 Fribourg</Box>
            <Box>Switzerland</Box>
          </ContactGroup>
          <ContactGroup label="Phone">
            <Box>+41 (0) 79 510 28 70</Box>
          </ContactGroup>
          <ContactGroup label="Legal">
            <Box>Privacy & Cookies</Box>
          </ContactGroup>
        </NavColumn>
      </Flex>
    </Container>
  </Box>
)

export default Navigation
