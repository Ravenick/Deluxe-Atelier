// Gallery.jsx
import React from 'react';

function Gallery({ products, onViewProduct }) {
  return (
    <section id="gallery" className="gallery-section">
      <h2 className="features-heading">The Atelier Gallery</h2>
      <p className="gallery-subtitle">Explore our latest leather collections and bespoke silhouettes</p>
      
      <div className="gallery-flex-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.img} alt={product.name} className="product-img" />
              {/* Veil Overlay Cover */}
              <div className="product-veil">
                <button className="view-btn" onClick={() => onViewProduct(product)}>
                  View Piece
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
