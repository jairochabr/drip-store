import { useNavigate } from "react-router-dom";
import { DiscountStyle, ProductCardStyle, ProductImage, ProductInfos, ProductPrice } from "./style";

export function ProductCard({ product }) {
  const navigate = useNavigate();
  const { id, name, category, originalPrice, currentPrice, discount, image } =
    product;

  const handleClick = () => {
    // console.log('ID do produto:', id);
    navigate(`/produtos/${id}`);
  };

  const formatPrice = (price) => {
    const currencyFormat = price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return currencyFormat;
  };

  return (
    <ProductCardStyle onClick={handleClick}>
      {discount && <DiscountStyle>{discount}% OFF</DiscountStyle>}
      <ProductImage>
        <img src={image} alt={name} />
      </ProductImage>
      <ProductInfos>
        <div className="ProductCategory">{category}</div>
        <h3 className="ProductName">{name}</h3>
        <ProductPrice>
          <s className="OriginalPrice">
            <span>{formatPrice(originalPrice)}</span>
          </s>
          <strong className="CurrentPrice">
            <span>{formatPrice(currentPrice)}</span>
          </strong>
        </ProductPrice>
      </ProductInfos>
    </ProductCardStyle>
  );
}
