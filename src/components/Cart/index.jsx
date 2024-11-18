import { useState } from "react";
import {
  CartSection,
  CartInfo,
  CartContent,
  ProductCount,
  ProductPrice,
} from "./style";

import Tennis from '../../assets/tennis/sneakers.png'
import { Link } from "react-router-dom";

export function CartItems({ unitPrice, productName, productColor, productSize, productImage }) {
  // Estado para quantidade e total
  const [quantity, setQuantity] = useState(1); // Inicia com 1 unidade
  const [totalPrice, setTotalPrice] = useState(unitPrice); // Inicia com o preço unitário

  // Função para aumentar a quantidade
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setTotalPrice(newQuantity * unitPrice);
      return newQuantity;
    });
  };

  // Função para diminuir a quantidade
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        setTotalPrice(newQuantity * unitPrice);
        return newQuantity;
      }
      return prevQuantity; // Não permite ir abaixo de 1
    });
  };

  return (
    <CartSection>
      <CartInfo>
        <span>Meu Carrinho</span>
        <div className="info-section">
            <span>Quantidade</span>
            <span>Unitário</span>
            <span>Total</span>
        </div>
      </CartInfo>

      <CartContent>
          <div className="content">
              <div className="image">
                <img src={Tennis} alt="Produto" />
              </div>
              <div className="details">
                  <h5>Tênis Nike Revolution 6 Next Nature Masculino</h5>
                  <div className="color">
                    <span>Cor:</span>
                    <span>Vermelho/branco</span>
                  </div>
                  <div className="size">
                    <span>Tamanho:</span>
                    <span>42</span>
                  </div>
              </div>
          </div>

        <ProductCount>
          <div className="count">
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
          </div>
          <div className="removeItem">
            <Link>remover item</Link>
          </div>
        </ProductCount>

        <ProductPrice>
            <div className="originalPrice">
              <span>R$ 219,00</span>
              <span>R$ 219,00</span>
             </div>
             <div className="totalPrice">
              <span>R$ 219,00</span>
              <span>R$ 219,00</span>
             </div>
        </ProductPrice>
      </CartContent>

      <AddressContent>
        <div className="discount">
            <span>Cupom de Desconto</span>
            <div className="cupom">
                <input type="text" placeholder="Insira seu código"/>
                <button>ok</button>
            </div>
        </div>
        <div className="discount">
            <span>Cupom de Desconto</span>
            <div className="cupom">
                <input type="text" placeholder="Insira seu código"/>
                <button>ok</button>
            </div>
        </div>
      </AddressContent>
    </CartSection>
  );
}