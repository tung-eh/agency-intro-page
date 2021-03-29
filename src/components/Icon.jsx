import React from 'react'
import { Box } from 'theme-ui'
import { ReactComponent as ArrowLeft } from '../icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../icons/arrow-right.svg'
import { ReactComponent as ArrowUpCircle } from '../icons/arrow-up-circle.svg'
const MAP = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up-circle': ArrowUpCircle,
}
const Icon = ({ name, ...props }) => {
  const Component = MAP[name]
  if (!Component) return null
  return <Box as={Component} {...props} />
}
export default Icon
