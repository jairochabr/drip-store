import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';

const sampleProducts = [
  { id: 1, name: 'Nike Air', price: '$100', image: '/path-to-image' },
  // Adicione mais produtos aqui
];

function ProductListingPage() {
  return (
    <div>
      <Header />
      <FilterGroup />
      <ProductListing products={sampleProducts} />
      <Footer />
    </div>
  );
}

export default ProductListingPage;
