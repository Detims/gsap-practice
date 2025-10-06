import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import theresa0 from "./assets/theresa0.png"
import theresa1 from "./assets/theresa1.png"
import ShakeImage from './ShakeImage'

gsap.registerPlugin(ScrollTrigger)

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
      x: 100,
      rotation: 360,
      duration: 2,
      ease: 'back.inOut',
    })
    timeline.to('.theresa0', {
      x: 250,
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
    
  }, [])

  useGSAP(() => {
    gsap.to('.stagger', {
      y: 250,
      rotation: 360,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 0.2,
        grid: [2, 1],
        axis: 'y',
        ease: 'circ.inOut',
        from: 'center',
      }
    })
  }, [])

  const scrollRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (scrollRef.current){
      const boxes = gsap.utils.toArray(scrollRef.current.children)
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 2),
          rotation: 360,
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 10%',
            scrub: true,
          },
          ease: 'power1.inOut',
        })
      })
    }
  }, { scope: scrollRef })

  useGSAP(() => {
    gsap.to('.word', {
      ease: 'power1.inOut',
      opacity: 1,
      y: 10,
    })

    gsap.fromTo('.para', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      delay: 0.4,
      stagger: 0.1,
    })

    gsap.fromTo('.hover', {
      y: -5,
    }, {
      y: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      onComplete: () => {
        // Reset y position
        gsap.set('.hover', { y: 0 });
      }
    });
  }, [])

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='word opacity-0'>GSAP to/from/fromTo</h1>
        <img src={theresa1} className='logo theresa1' alt='theresa' />
        <h1 className='para'>Timeline</h1>
        <img src={theresa0} className='logo theresa0' alt='theresa' />

        <button onClick={() => {
          if(timeline.paused()) {
            timeline.play()
          } else {
            timeline.pause()
          }
        }}>
          Pause
        </button>

        <h1 className='para'>Stagger</h1>
        <div className='flex'>
          <img src={theresa1} className='stagger' alt='theresa' />
          <img src={theresa1} className='stagger' alt='theresa' />
          <img src={theresa1} className='stagger' alt='theresa' />
        </div>

        <h1 className='para pt-128'>Hover Shake</h1>
        <ShakeImage />

        <div className='flex para' ref={scrollRef}>
          <img src={theresa1} className='pt-96' alt='theresa' />
          <img src={theresa1} className='pt-96' alt='theresa' />
        </div>

        <h1 className='pt-96 para'>Scroll Trigger</h1>
      </div>
    </div>
  )
}

export default App
