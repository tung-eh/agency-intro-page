import { Flex } from 'theme-ui'
import React from 'react'

const Row = ({ sx, ...props }) => (
  <Flex sx={{ width: '100%', px: [3, 4], ...sx }} {...props}></Flex>
)

export default Row
