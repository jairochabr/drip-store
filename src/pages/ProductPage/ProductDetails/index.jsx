import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { TENNIS } from "@/assets";
import "swiper/css";
import "swiper/css/navigation";
import {
  SlideContainer,
  SlideImages,
  TextContent,
  ProductSize,
  ProductColor,
  BuyButton,
  SlideImage,
  ProductCategory,
  ProductRating,
  RatingValue,
  ProductPrice,
  CurrentPrice,
  OldPrice,
  ProductDescription,
  SizeOptions,
  ColorOptions,
  ColorOption,
} from "./style";

const ProductDetails = () => {
  const [index, setIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const data = [
    { id: "1", name: "Nike Gray", image: TENNIS.nikegray },
    { id: "2", name: "Nike Green", image: TENNIS.nikegreen },
    { id: "3", name: "Nike Red", image: TENNIS.nikered },
    { id: "4", name: "Nike Yellow", image: TENNIS.nikeyellow },
  ];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    const colorIndex = data.findIndex((item) =>
      item.name.includes(color.charAt(0).toUpperCase() + color.slice(1))
    );
    setIndex(colorIndex);
  };

  const handleBuyClick = () => {
    setSelectedSize(null);
    setSelectedColor(null);
  };

  return (
    <SlideContainer>
      <SlideImages>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
          initialSlide={index}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={item.id} virtualIndex={idx}>
              <SlideImage src={item.image} alt={`imagem ${item.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideImages>

      <TextContent>
        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
        <ProductCategory>Casual | Nike | REF: 38416711</ProductCategory>
        <ProductRating>
          <span>⭐⭐⭐⭐⭐</span> <RatingValue>4.7</RatingValue>{" "}
          <span>(90 avaliações)</span>
        </ProductRating>
        <ProductPrice>
          <CurrentPrice>R$ 219,00</CurrentPrice>
          <OldPrice>R$ 219,00</OldPrice>
        </ProductPrice>
        <ProductDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ProductDescription>

        <ProductSize>
          <p>Tamanho</p>
          <SizeOptions>
            {[39, 40, 41, 42, 43].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </SizeOptions>
        </ProductSize>

        <ProductColor>
          <p>Cor</p>
          <ColorOptions>
            {["red", "orange", "gray", "green"].map((color) => (
              <ColorOption
                key={color}
                className={`color ${color} ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => handleColorSelect(color)}
              ></ColorOption>
            ))}
          </ColorOptions>
        </ProductColor>

        <BuyButton onClick={handleBuyClick}>COMPRAR</BuyButton>
      </TextContent>
    </SlideContainer>
  );
};

export default ProductDetails;
