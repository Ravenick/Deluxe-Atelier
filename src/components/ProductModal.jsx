// ProductModal.jsx
import React from 'react';

function ProductModal({ product, onClose, isFavorite, onToggleFavorite }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-grid">
          <div className="modal-image-pane">
            <img src={product.img} alt={product.name} />
          </div>
          
          <div className="modal-details-pane">
            <span className="modal-tag">Bespoke Collection</span>
            <h2>{product.name}</h2>
            <p className="modal-price">{product.price}</p>
            
            <div className="modal-specs">
              <h4>Materials & Composition</h4>
              <p>{product.material}</p>
            </div>

            <div className="modal-actions">
              <button 
  className={`modal-fav-toggle ${isFavorite ? 'active' : ''}`}
  onClick={() => onToggleFavorite(product)}
>
  <span className={isFavorite ? "bi--suit-heart-fill" : "bi--suit-heart"}></span>
  {isFavorite ? "Saved to Favorites" : "Add to Favorites"}
</button>

              
              <button className="modal-primary-btn" disabled>
                Inquire Order (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
