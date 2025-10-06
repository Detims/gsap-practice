import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import theresa0 from "./assets/theresa0.png";
import theresa1 from "./assets/theresa1.png";

export default function ShakeImage() {
    const imgRef = useRef<HTMLImageElement>(null);
    const [hasShaken, setHasShaken] = useState(false);
    const [imgSrc, setImgSrc] = useState(theresa1);

    const handleMouseEnter = () => {
    if (hasShaken || !imgRef.current) return;

    // Shake animation
    gsap.to(imgRef.current, {
        y: -5,
        duration: 0.1,
        repeat: 9, // 10 total iterations (0.1s * 10 = 1s)
        yoyo: true,
        ease: 'power1.inOut',
        onComplete: () => {
        // Swap image source after shake completes
        setImgSrc(theresa0);
        setHasShaken(true);
        
        // Reset y position
        gsap.set(imgRef.current, { y: 0 });
        }
    });
    };


    return (
        <img
            ref={imgRef}
            src={imgSrc} 
            className='hover' 
            alt='' 
            onMouseEnter={handleMouseEnter}
        />
    );
}