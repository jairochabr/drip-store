import React from 'react';

function ProductDetails({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button style={{ backgroundColor: '#C92071', color: '#FFFFFF' }}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ProductDetails;
