import { Box, Flex, Heading, Image, Text } from 'theme-ui'
import React from 'react'

import NavButtons from './NavButtons'
import curologyImg from '../../assets/curology-min.png'
import luminImg from '../../assets/lumin-min.png'
import yourspaceImg from '../../assets/yourspace-min.png'

const caseStudies = [
  {
    id: 1,
    subtitle: 'Curology',
    title: 'A custom formula for your skin’s unique needs',
    img: curologyImg,
  },
  {
    id: 2,
    subtitle: 'Yourspace',
    title: 'Open space floor plans for you next venture',
    img: yourspaceImg,
  },
  {
    id: 3,
    subtitle: 'Lumin',
    title: 'For your best look ever',
    img: luminImg,
  },
]

const CaseItem = ({ subtitle, title, img }) => (
  <Box
    sx={{
      position: 'relative',
      bg: 'black',
      cursor: 'pointer',
      ':hover > div:first-child': { opacity: 0.4 },
    }}
  >
    <Box
      className="case-image"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        opacity: 0.65,
        transition: '0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99)',
      }}
    >
      <Image
        sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
        src={img}
        alt={title}
      />
    </Box>
    <Flex
      sx={{
        width: ['100vw', '100vw', 'calc(100vw / 3)'],
        height: '50vh',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
        p: [3, 4],
      }}
    >
      <Text
        sx={{
          mt: 156,
          fontSize: ['1.2rem', '1.4rem', '1.4rem', '1.6rem'],
          lineHeight: ['2.2rem', 'normal'],
          opacity: 0.8,
          fontWeight: 600,
        }}
      >
        {subtitle}
      </Text>
      <Heading
        sx={{
          fontSize: ['1.7rem', '2rem', '2rem', '2.4rem'],
          lineHeight: ['2.2rem', '2.4rem', '2.4rem', '3.4rem'],
          width: '85%',
          mt: [2, 3],
        }}
      >
        {title}
      </Heading>
    </Flex>
  </Box>
)

const Cases = () => {
  return (
    <Box sx={{}}>
      <Box sx={{ width: '100%', height: '50vh' }}>
        <Flex sx={{ flexDirection: ['column', 'column', 'row'] }}>
          {caseStudies.map((caseStudy) => (
            <CaseItem key={caseStudy.id} {...caseStudy} />
          ))}
        </Flex>
        <NavButtons />
      </Box>
    </Box>
  )
}

export default Cases
