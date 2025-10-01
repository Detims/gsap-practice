import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import theresa0 from "./assets/theresa0.png"
import theresa1 from "./assets/theresa1.png"
import './App.css'

function App() {
  useGSAP(() => {
    gsap.fromTo('.theresa1', {
      x: -250,
      rotation: 0,
    },
    {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: 'power1.inOut',
    })
  }, [])

  const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 0, yoyo: true,
  })

  useGSAP(() => {
    timeline.to('.theresa0', {
      x: 250,
      rotation: 360,
      duration: 2,
      ease: 'back.inOut',
    })
    timeline.to('.theresa0', {
      y: 250,
      duration: 2,
      ease: 'back.inOut'
    })
    timeline.to('.theresa0', {
      x: -250,
      scale: 2,
      rotation: 180, 
      duration: 2,
      ease: 'back.inOut',
    })
    
  }), []

  return (
    <>
      <h1>GSAP to/from/fromTo</h1>
      <img src={theresa1} className='logo theresa1' alt='theresa' />
      <img src={theresa0} className='logo theresa0' alt='theresa' />
    </>
  )
}

export default App  
