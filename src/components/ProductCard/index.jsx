import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #CCCCCC', padding: '1rem', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button style={{ backgroundColor: '#C92071', color: '#FFFFFF' }}>Comprar</button>
    </div>
  );
}

export default ProductCard;
