import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import theresa from "./assets/theresa1.png"
import './App.css'

function App() {
  useGSAP(() => {
    gsap.fromTo('.theresa', {
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

  return (
    <>
      <h1>GSAP to/from/fromTo</h1>
      <img src={theresa} className='logo theresa' alt='theresa' />
    </>
  )
}

export default App  
