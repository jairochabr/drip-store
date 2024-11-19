import { useState } from "react";
import {
  CarouselContainer,
  CarouselImages,
  TextContent,
  ProductCategory,
  ProductRating,
  RatingValue,
  ProductPrice,
  CurrentPrice,
  OldPrice,
  ProductDescription,
  SizeOptions,
  ColorOptions,
  BuyButton,
  Arrow,
  Thumbnails,
  Thumbnail,
} from "./style";
import { TENNIS } from "@/assets"; // Importe suas imagens de assets

export const ProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Produto fixo
  const product = {
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    originalPrice: 200,
    currentPrice: 100,
    discount: 30,
    images: [
      TENNIS.nikered,
      TENNIS.nikegreen,
      TENNIS.nikegray,
      TENNIS.nikeyellow,
    ],
    description:
      "O Tênis K-Swiss V8 Masculino é ideal para quem busca performance e estilo. Com um design moderno e materiais de alta qualidade, oferece conforto durante todo o dia. A sola de borracha garante aderência e estabilidade, enquanto o cabedal proporciona ventilação adequada para os pés.",
    rating: 4.7,
    reviews: 90,
  };

  // Função para pegar a imagem com base na cor selecionada
  const getImageForColor = (color) => {
    switch (color) {
      case "red":
        return product.images[0];
      case "green":
        return product.images[1];
      case "gray":
        return product.images[2];
      case "yellow":
        return product.images[3];
      default:
        return product.images[0]; // Default para a primeira imagem
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % product.images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + product.images.length) % product.images.length;
    setCurrentIndex(prevIndex);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    // Atualizar a imagem com base na cor
    const selectedImage = getImageForColor(color);
    const imageIndex = product.images.indexOf(selectedImage);
    setCurrentIndex(imageIndex); // Atualizar a imagem com base na cor
  };

  const handleBuyClick = () => {
    if (!selectedSize && !selectedColor) {
      alert("Selecione um tamanho e uma cor.");
    } else if (!selectedSize) {
      alert("Selecione um tamanho.");
    } else if (!selectedColor) {
      alert("Selecione uma cor.");
    } else {
      alert("Compra realizada com sucesso!");

      // Resetar todos os estados após a compra
      setSelectedSize(null);
      setSelectedColor(null);
      setCurrentIndex(0); // Resetar a imagem para a primeira
    }
  };

  return (
    <CarouselContainer>
      {/* Exibição das imagens do produto */}
      <CarouselImages>
        <Arrow className="prev" onClick={handlePrev}>
          &#10094;
        </Arrow>
        {/* Alterando a imagem para refletir a cor ou índice atual */}
        <img
          src={
            selectedColor
              ? getImageForColor(selectedColor)
              : product.images[currentIndex]
          }
          alt={`Imagem do produto ${currentIndex + 1}`}
          className={`image-${currentIndex}`} // Aplicando a classe dinâmica
        />
        <Arrow className="next" onClick={handleNext}>
          &#10095;
        </Arrow>

        {/* Miniaturas para navegar pelas imagens */}
        <Thumbnails>
          {product.images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Miniatura ${index + 1}`}
              onClick={() => {
                goToImage(index);
                // Atualizar a cor selecionada quando clicar na miniatura
                const colors = ["red", "green", "gray", "yellow"];
                setSelectedColor(colors[index]);
              }}
              isActive={index === currentIndex}
            />
          ))}
        </Thumbnails>
      </CarouselImages>

      {/* Informações do produto */}
      <TextContent>
        <h1>{product.name}</h1>
        <ProductCategory>{product.category}</ProductCategory>

        {/* Avaliação do produto */}
        <ProductRating>
          <span>⭐⭐⭐⭐⭐</span> <RatingValue>{product.rating}</RatingValue>{" "}
          <span>({product.reviews} avaliações)</span>
        </ProductRating>

        {/* Preço do produto */}
        <ProductPrice>
          <CurrentPrice>R$ {product.currentPrice}</CurrentPrice>
          <OldPrice>R$ {product.originalPrice}</OldPrice>
        </ProductPrice>

        {/* Descrição do produto */}
        <ProductDescription>{product.description}</ProductDescription>

        {/* Tamanhos fixos */}
        <div>
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
        </div>

        {/* Cores fixas */}
        <div>
          <p>Cor</p>
          <ColorOptions>
            {["red", "green", "gray", "yellow"].map((color) => (
              <button
                key={color}
                className={`color ${color} ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => handleColorSelect(color)}
              ></button>
            ))}
          </ColorOptions>
        </div>

        {/* Botão de compra */}
        <BuyButton onClick={handleBuyClick}>COMPRAR</BuyButton>
      </TextContent>
    </CarouselContainer>
  );
};
