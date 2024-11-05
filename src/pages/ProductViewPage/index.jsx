import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductDetails from '../../components/ProductDetails';

const sampleProduct = { name: 'Nike Air', price: '$100', description: 'Descrição do produto', image: '/path-to-image' };

function ProductViewPage() {
  return (
    <div>
      <Header />
      <ProductDetails product={sampleProduct} />
      <Footer />
    </div>
  );
}

export default ProductViewPage;
