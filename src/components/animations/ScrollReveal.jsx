import React, { Children } from 'react'
import {} from '../../hooks/useScrollReveal'

  const ScrollReveal = ( 
    Children,
    animation = 'fade-up',
    delay = 0,
    duration = 1000
  ) => {

      const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

      const claAnimations = {
        fadeUp: 'opacity-0 translate-y-8',
        fadeIn: 'opacity-0',
        slideLeft: 'opacity-0 -translate-x-12',
        slideRight: 'opacity-0 translate-x-12',
        scaleIn: 'opacity-0 scale-90'
      }

      const visibleClass = 'opacity-100 translate-y-0 translate-x-0 scale-100 transition-all duration-1000 ease-out'


  return (
    <div
      ref={ref}
      className={`${claAnimations[animation]} ${isVisible ? visibleClass : ''}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {Children}
    </div>
  )
}

export default ScrollReveal