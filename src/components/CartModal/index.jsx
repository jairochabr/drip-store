import { useCart } from "@/contexts/CartContext";
import {
  ButtonEmpty,
  CartButton,
  CartButtons,
  CartContent,
  CartImage,
  CartInfos,
  CartPrice,
  EmptyCart,
  ItemsContainer,
  ModalContainer,
  ProductInfos,
  ProductPrice,
  RemoveButton,
} from "./style";

export function CartModal({ isOpen }) {
  const { products, setProducts } = useCart();

  if (!isOpen) return null;

  const handleRemoveProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  const handleCleanProducts = () => {
    setProducts([]);
  };

  const formatPrice = (price) => {
    const currencyFormat = price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return currencyFormat;
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <CartContent>
        <h2 className="title">Meu Carrinho</h2>
        <ItemsContainer>
          {products.length === 0 ? (
            <EmptyCart>
              <span>carrinho está vazio</span>
            </EmptyCart>
          ) : (
            products.map((item) => (
              <CartInfos key={item.id}>
                <CartImage>
                  <img src={item.image} alt={item.name} />
                  <RemoveButton onClick={() => handleRemoveProduct(item.id)}>
                    x
                  </RemoveButton>
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
            <span>{formatPrice(calculateTotal())}</span>
          </strong>
        </CartPrice>
        <CartButtons>
          <ButtonEmpty onClick={handleCleanProducts}>Esvaziar</ButtonEmpty>
          <CartButton to='/produtos/carrinho'>Ver Carrinho</CartButton>
        </CartButtons>
      </CartContent>
    </ModalContainer>
  );
}
