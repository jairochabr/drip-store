import { useState } from "react";
import {
  CartSection,
  CartInfo,
  CartContent,
  ProductImage,
  ProductDetails,
  ProductCount,
  ProductPrice,
} from "./style";

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
        <ProductImage>
          <img src={productImage} alt="Produto" />
        </ProductImage>

        <ProductDetails>
          <h5>{productName}</h5>

          <div>
            <span>Cor:</span>
            <span>{productColor}</span>
          </div>

          <div>
            <span>Tamanho:</span>
            <span>{productSize}</span>
          </div>
        </ProductDetails>

        <ProductCount>
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </ProductCount>

        <ProductPrice>
          <span>R$ {unitPrice}</span>
          <span>R$ {totalPrice}</span>
        </ProductPrice>
      </CartContent>
    </CartSection>
  );
}