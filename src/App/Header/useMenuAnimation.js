import { useEffect } from 'react'
import gsap from 'gsap'

const useMenuAnimation = (menuOpen) =>
  useEffect(() => {
    if (menuOpen) {
      gsap
        .timeline()
        .to('.nav', 1, {
          minHeight: '50vh',
          height: 'auto',
          ease: 'expo.inOut',
        })
        .to('.hamburger-open', 0.6, {
          delay: -1,
          scaleX: 0,
          transformOrigin: 'center',
          ease: 'expo.inOut',
        })
        .to('#Path_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to('#Path_2', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to('#Line_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to('#circle', 0.6, {
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to('.hamburger-close', 0.6, {
          delay: -0.8,
          css: {
            display: 'block',
          },
        })
    } else {
      gsap
        .timeline()
        .to('.nav', 1, { minHeight: 'unset', height: 0, ease: 'expo.inOut' })
        .to('#circle', 0.6, {
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to('#Path_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Path_2', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Line_1', 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to('.hamburger-open', 0.6, {
          delay: -0.6,
          scaleX: 1,
          transformOrigin: 'center',
          ease: 'expo.inOut',
        })
        .to('.hamburger-close', { css: { display: 'none' } })
    }
  }, [menuOpen])

export default useMenuAnimation
