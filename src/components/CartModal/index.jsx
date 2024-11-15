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

export function CartModal() {
  // Simulando múltiplos itens para demonstrar o scroll
  const cartItems = [
    {
      id: 1,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: "219,00",
      originalPrice: "219,00",
      image: TENNIS.sneakers,
    },
    // Repetindo itens para demonstração
    {
      id: 2,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: "219,00",
      originalPrice: "219,00",
      image: TENNIS.sneakers,
    },
    {
      id: 3,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: "219,00",
      originalPrice: "219,00",
      image: TENNIS.sneakers,
    },
    {
      id: 4,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: "219,00",
      originalPrice: "219,00",
      image: TENNIS.sneakers,
    },
    {
      id: 5,
      name: "Tênis Nike Revolution 6 Next Nature Masculino",
      price: "219,00",
      originalPrice: "219,00",
      image: TENNIS.sneakers,
    },
  ];

  return (
    <ModalContainer>
      <CartContent>
        <h2 className="title">Meu Carrinho</h2>
        <ItemsContainer>
          {cartItems.map((item) => (
            <CartInfos key={item.id}>
              <CartImage>
                <img src={item.image} alt={item.name} />
              </CartImage>
              <ProductInfos>
                <h3 className="title">{item.name}</h3>
                <ProductPrice>
                  <strong className="currentPrice">
                    <span>R$ {item.price}</span>
                  </strong>
                  <s className="originalPrice">
                    <span>R$ {item.originalPrice}</span>
                  </s>
                </ProductPrice>
              </ProductInfos>
            </CartInfos>
          ))}
        </ItemsContainer>
        <CartPrice>
          <strong>Valor total:</strong>
          <strong className="totalPrice">
            <span>R$ 219,00</span>
          </strong>
        </CartPrice>
        <CartButtons>
          <ButtonEmpty>Esvaziar</ButtonEmpty>
          <CartButton>Ver Carrinho</CartButton>
        </CartButtons>
      </CartContent>
    </ModalContainer>
  );
}
