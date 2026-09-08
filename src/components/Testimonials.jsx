// Testimonials.jsx
import React, { useState, useEffect, useRef } from 'react';

function Testimonials() {
  // 1. Local Initial State Database (Includes Custom Star Metric Parameters)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      quote: "The bespoke finish on my leather loafers exceeded every structural standard. Truly a masterpiece out of Abuja.",
      author: "Amadi O.",
      location: "Lagos, Nigeria",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1723221907187-3e88c1d74b99?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2VyaWFuJTIwbWFufGVufDB8fDB8fHww"
    },
    {
      id: 2,
      quote: "International delivery arrived safely in London within 5 days. Pristine leather materials built to last a lifetime.",
      author: "Elena R.",
      location: "London, UK",
      rating: 5,
      avatar: "https://plus.unsplash.com/premium_photo-1723874555661-ad7b25cd7b68?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1lcmljYW4lMjBsYWR5fGVufDB8fDB8fHww"
    },
    {
      id: 3,
      quote: "Uncompromising premium attention to detail. The custom monogram detailing turns heads every single time I carry it.",
      author: "Tunde W.",
      location: "Abuja, Nigeria",
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1533108344127-a586d2b02479?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlnZXJpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D"
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef(null);

  // Form Submission Field Input States
  const [formData, setFormData] = useState({ author: '', location: '', quote: '' });
  const [formRating, setFormRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  // 2. Loop Navigation Logic (Triggered on 5-Second Interval Cycles)
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const startTimer = () => {
    stopTimer();
    autoPlayRef.current = setInterval(nextSlide, 5000);
  };

  const stopTimer = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [reviews.length]); // Reset calculations cleanly if list length mutates

  // 3. Interactive Star Layout Sub-Component Helper
  const StarRow = ({ count }) => {
    return (
      <div className="star-row">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={i < count ? "bi--star-fill active-star" : "bi--star empty-star"}
          ></span>
        ))}
      </div>
    );
  };

  // 4. Form Action Submission Handler
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!formData.author || !formData.quote) return;

    const newReview = {
      id: Date.now(),
      quote: formData.quote,
      author: formData.author,
      location: formData.location || "Verified Collector",
      rating: formRating,
      avatar: "https://unsplash.com" // High-end fallback profile
    };

    setReviews((prev) => [newReview, ...prev]);
    setActiveIndex(0); // Instantly shift focus back to show user submission first
    setFormData({ author: '', location: '', quote: '' });
    setFormRating(5);
  };

  return (
    <section 
      className="testimonial-section" id='testimonials'
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      onTouchStart={stopTimer}
      onTouchEnd={startTimer}
    >
      <h2 className="features-heading">Testimonials</h2>
      <p className="testimonial-subtitle">Perspectives from our global luxury collective</p>

      {/* Main View Carousel Component Block */}
      <div className="testimonial-slider-container">
        <button className="slider-arrow arrow-left" onClick={prevSlide} aria-label="Previous review">
          <span className="akar-icons--chevron-left"></span>
        </button>

        <div className="testimonial-viewport">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`testimonial-fade-card ${index === activeIndex ? 'visible' : ''}`}
            >
              <StarRow count={review.rating} />
              <p className="review-quote-text">"{review.quote}"</p>
              
              <div className="review-profile-meta">
                <img src={review.avatar} alt={review.author} className="reviewer-avatar" />
                <div>
                  <h4 className="reviewer-name">{review.author}</h4>
                  <p className="reviewer-locale">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-arrow arrow-right" onClick={nextSlide} aria-label="Next review">
          <span className="akar-icons--chevron-right"></span>
        </button>
      </div>

      <div className="slider-dots-group">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
