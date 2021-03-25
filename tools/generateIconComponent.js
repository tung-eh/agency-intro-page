const fs = require('fs')

const getIconName = (filename) => filename.replace('.svg', '')

const getComponentName = (filename) => {
  return getIconName(filename)
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

fs.readdir('./src/icons', (err, filenames) => {
  if (err) {
    console.error(err)
    return
  }

  const content = `
    import React from 'react'
    import {Box} from 'theme-ui'
    ${filenames
      .map(
        (filename) =>
          `import {ReactComponent as ${getComponentName(
            filename
          )}} from '../icons/${filename}'`
      )
      .join('\n')}
    const MAP = {
      ${filenames
        .map(
          (filename) =>
            `'${getIconName(filename)}': ${getComponentName(filename)},`
        )
        .join('\n')}
    }
    const Icon = ({ name, ...props }) => {
      const Component = MAP[name]
      if (!Component) return null;
      return <Box as={Component} {...props}/>
    }
    export default Icon
  `

  fs.writeFileSync('./src/components/Icon.jsx', content)
})
