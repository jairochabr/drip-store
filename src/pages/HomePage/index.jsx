<<<<<<< HEAD
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
=======
import { Loading } from "@/components/Loading";
import { Carousel } from "./Carousel";
import { FeaturedSection } from "./Featured";
import { SpecialOffer } from "./SpecialOffer";
>>>>>>> 32f62c78926f5e6b5dcc6f034527364ffdeebcdc

const sampleProducts = [
  { id: 1, name: 'Nike Air', price: '$100', image: '/path-to-image' },
  // Adicione mais produtos aqui
];

function HomePage() {
  return (
<<<<<<< HEAD
    <div>
      <Header />
      <Section title="Produtos em Destaque">
        <ProductListing products={sampleProducts} />
      </Section>
      <Footer />
    </div>
=======
    <>
      <Loading />
      <Carousel />
      <FeaturedSection />
      <SpecialOffer />
    </>
>>>>>>> 32f62c78926f5e6b5dcc6f034527364ffdeebcdc
  );
}

export default HomePage;
