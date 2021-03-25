import React from 'react'
import { Box } from 'theme-ui'
import { ReactComponent as ArrowLeft } from '../icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../icons/arrow-right.svg'
const MAP = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
}
const Icon = ({ name, ...props }) => {
  const Component = MAP[name]
  if (!Component) return null
  return <Box as={Component} {...props} />
}
export default Icon
