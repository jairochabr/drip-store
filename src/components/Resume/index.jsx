import React from 'react';
import Tennis from '../../assets/tennis/sneakers.png';
import {
  ResumeContainer,
  ProductImage,
  Subtotal,
  Frete,
  Desconto,
  Total,
} from './style';

export function Resume() {
  return (
    <ResumeContainer>
      <h1>RESUMO</h1>
      <ProductImage>
        <img src={Tennis} alt="Produto" />
        <h5>Tênis Nike Revolution 6 Next Nature Masculino</h5>
      </ProductImage>
      <Subtotal>
        <span>Subtotal: </span>
        <span>R$ 219,00</span>
      </Subtotal>
      <Frete>
        <span>Frete: </span>
        <span>R$ 0,00</span>
      </Frete>
      <Desconto>
        <span>Desconto: </span>
        <span>R$ 30,00</span>
      </Desconto>
      <Total>
        <h2>Total</h2>
        <div className="price">
          <h2>R$ 219,00</h2>
          <span>ou 10x de R$ 21,00 sem juros</span>
        </div>
      </Total>
      {/* 
      <RouterLink to="/" className='btn-resume'>
        <span>Realizar Pagamento</span>
      </RouterLink> 
      */}
    </ResumeContainer>
  );
}