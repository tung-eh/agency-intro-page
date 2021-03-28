import React from 'react'
import { Link as ThemeLink } from 'theme-ui'
import { NavLink as RouterLink } from 'react-router-dom'

const Link = (props) => <ThemeLink as={RouterLink} {...props} />

export default Link
