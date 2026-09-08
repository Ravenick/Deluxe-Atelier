import React from 'react'

function Marquee({ items }) {
  // Triple the items array to prevent visual gaps during large screen loops
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {tripleItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="marquee-text">{item.text}</span>
            {item.icon && (
              <span icon={item.icon} className={`marquee-icon ${item.icon}`}></span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
