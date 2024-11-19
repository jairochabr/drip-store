import { TENNIS } from "@/assets";
import {
  ButtonEmpty,
  CartButton,
  CartButtons,
  CartContent,
  CartImage,
  CartInfos,
  CartPrice,
  ItemsContainer,
  ModalContainer,
  ProductInfos,
  ProductPrice,
} from "./style";
import { useState } from "react";

export function CartModal({ isOpen }) {
  if (!isOpen) return null;
  const [isProducts, setIsProducts] = useState([
    {
      id: 1,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.00,
      originalPrice: 219.00,
      image: TENNIS.sneakers,
    },
    {
      id: 2,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.00,
      originalPrice: 219.00,
      image: TENNIS.sneakers,
    },
    {
      id: 3,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.00,
      originalPrice: 219.00,
      image: TENNIS.sneakers,
    },
    {
      id: 4,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.00,
      originalPrice: 219.00,
      image: TENNIS.sneakers,
    },
    {
      id: 5,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: 219.00,
      originalPrice: 219.00,
      image: TENNIS.sneakers,
    },
  ]);

  const handleCleanProducts = () => {
    setIsProducts([])
  }

  const formatPrice = (price) => {
    const currencyFormat = price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return currencyFormat
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <CartContent>
        <h2 className="title">Meu Carrinho</h2>
        <ItemsContainer>
          {isProducts.length === 0 ? (
            <span>carrinho está vazio</span>
          ) : (
            isProducts.map(item => (
              <CartInfos key={item.id}>
                <CartImage>
                  <img src={item.image} alt={item.name} />
                </CartImage>
                <ProductInfos>
                  <h3 className="title">{item.name}</h3>
                  <ProductPrice>
                    <strong className="currentPrice">
                      <span>{formatPrice(item.price)}</span>
                    </strong>
                    <s className="originalPrice">
                      <span>{formatPrice(item.originalPrice)}</span>
                    </s>
                  </ProductPrice>
                </ProductInfos>
              </CartInfos>
            ))
          )}
        </ItemsContainer>
        <CartPrice>
          <strong>Valor total:</strong>
          <strong className="totalPrice">
            <span>R$ 219,00</span>
          </strong>
        </CartPrice>
        <CartButtons>
          <ButtonEmpty onClick={handleCleanProducts}>Esvaziar</ButtonEmpty>
          <CartButton>Ver Carrinho</CartButton>
        </CartButtons>
      </CartContent>
    </ModalContainer>
  );
}
