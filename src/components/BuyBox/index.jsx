import React from 'react';

function BuyBox({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button style={{ backgroundColor: '#C92071', color: '#FFFFFF' }}>Comprar Agora</button>
    </div>
  );
}

export default BuyBox;
