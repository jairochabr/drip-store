import { TENNIS } from "@/assets";
import { ButtonEmpty, CartButton, CartButtons, CartContent, CartImage, CartInfos, CartPrice, ModalContainer, ProductInfos, ProductPrice } from "./style";

export function CartModal() {
  return (
    <ModalContainer>
      <CartContent>
        <h2 className="title">Meu Carrinho</h2>
        {/* <div> */}

          <CartInfos>
            <CartImage>
              <img src={TENNIS.sneakers} alt="..." />
            </CartImage>
            <ProductInfos>
              <h3 className="title">Tênis Nike Revolution 6 Next Nature Masculino</h3>
              <ProductPrice>
                <strong className="currentPrice">
                  <span>R$ 219,00</span>
                </strong>
                <s className="originalPrice">
                  <span>R$ 219,00</span>
                </s>
              </ProductPrice>
            </ProductInfos>
          </CartInfos>

          <CartInfos>
            <CartImage>
              <img src={TENNIS.sneakers} alt="..." />
            </CartImage>
            <ProductInfos>
              <h3 className="title">Tênis Nike Revolution 6 Next Nature Masculino</h3>
              <ProductPrice>
                <strong className="currentPrice">
                  <span>R$ 219,00</span>
                </strong>
                <s className="originalPrice">
                  <span>R$ 219,00</span>
                </s>
              </ProductPrice>
            </ProductInfos>
          </CartInfos>

          {/* </div> */}

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
