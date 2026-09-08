import React from 'react'
import hero from '../assets/hero.png';
import sandal from '../assets/sandal.png';


export default function Hero() {
  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
  };

  return (
    <>
        <section className="hero">
            <span className="curtain"></span>
            <div className="hero-content">
                <h1>Welcome to <span className="brand-name">De'luxe Leather Atelier</span></h1>
                <p className="caption">Experience the finest craftsmanship in leather goods.</p>
            </div>
            <div className="cta-btn">
                <a href="#features" className="learn-more" id='learn-more-btn'>Learn More</a>
                <a href="#gallery" className="explore" id='explore-btn'>Explore Collection</a>
            </div>
            <button
                type="button"
                className="scroll-down"
                onClick={scrollToNextSection}
                aria-label="Scroll to the next section"
            >
                <span className="akar-icons--chevron-down" aria-hidden="true"></span>
            </button>
        </section>
    </>
  )
}
