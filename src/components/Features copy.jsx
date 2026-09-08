import React from 'react'

// Sub-component for individual Feature Cards
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon-wrapper">
        {/* Render Iconify elements dynamically using the icon name prop */}
        <span className={`feature-icon ${icon}`}></span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Main container component
function Features({ featureData }) {
  return (
    <section id="features" className="features-section">
      <h2 className="features-heading">Our Luxury Features</h2>
      <div className="features-container">
{featureData.map((feature, index) => (
  <FeatureCard 
    key={index}
    icon={feature.icon}
    title={feature.title}
    description={feature.description}
    // Inline style injects a staggered delay (e.g., 0s, 0.4s, 0.8s...)
    style={{ animationDelay: `${index * 0.4}s` }} 
  />
))}

      </div>
    </section>
  )
}

export default Features
