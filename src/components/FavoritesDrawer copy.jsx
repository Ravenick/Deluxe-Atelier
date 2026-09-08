// FavoritesDrawer.jsx
import React from 'react';

function FavoritesDrawer({ isOpen, onClose, favorites, onRemove }) {
  return (
    <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h3>Your Wishlist</h3>
          <button className="close-drawer-btn" onClick={onClose}>
  <span className="game-icons--cancel"></span>
</button>
        </div>

        <div className="drawer-body">
          {favorites.length === 0 ? (
            <div className="drawer-empty-state">
  <span className="pinhead--heart-with-crack"></span>
  <p>Your curated list is currently empty.</p>
</div>

          ) : (
            <div className="drawer-items-list">
              {favorites.map((item) => (
                <div key={item.id} className="drawer-item-card">
                  <img src={item.img} alt={item.name} />
                  <div className="drawer-item-meta">
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                  <button className="remove-item-btn" onClick={() => onRemove(item)} title="Remove item">
  <span className="bi--trash-fill"></span>
</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoritesDrawer;
