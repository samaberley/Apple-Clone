import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useState } from 'react';
import { useEffect } from "react";

const Hero = () => {
  const [vidoeSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window,innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1 })
    gsap.to("#cta",  {opacity: 1, y: -50, delay: 1})
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id='hero' className="hero-title">
          iPhone 15 Pro
        </p>

        <div>
          <video className="pointer-events-none" autoPlay muted playsInLine={true} key={vidoeSrc}>
            <source src={vidoeSrc} type="video/mp4" />
          </video>
        </div>

        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
          <a href="'#highlights" className="btn">Buy</a>
          <p className="font-normal text-xl">
          From $199/month or $999
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero