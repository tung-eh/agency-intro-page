import { Box, Flex } from 'theme-ui'
import React from 'react'

import Icon from '../../../components/Icon';


const NavButton = ({ disabled = false, icon }) => (
  <Flex
    sx={{
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'rgba(0, 0, 0, .4)',
      height: 72,
      width: 72,
      borderRadius: '50%',
      color: 'white',
      opacity: disabled && '0.3',
    }}
  >
    <Icon name={icon} sx={{ width: 28, height: 28 }} />
  </Flex>
)

const NavButtons = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      display: ['none', 'none', 'flex'],
      alignItems: 'center',
      justifyContent: 'space-between',
      p: 4,
    }}
  >
    <NavButton icon="arrow-left" disabled />
    <NavButton icon="arrow-right" />
  </Box>
)

export default NavButtons
