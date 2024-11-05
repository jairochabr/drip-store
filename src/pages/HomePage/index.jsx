import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';

const sampleProducts = [
  { id: 1, name: 'Nike Air', price: '$100', image: '/path-to-image' },
  // Adicione mais produtos aqui
];

function HomePage() {
  return (
    <div>
      <Header />
      <Section title="Produtos em Destaque">
        <ProductListing products={sampleProducts} />
      </Section>
      <Footer />
    </div>
  );
}

export default HomePage;
