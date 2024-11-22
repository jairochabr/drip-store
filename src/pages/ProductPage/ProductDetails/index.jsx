import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para navegação
import { ToastContainer, toast } from "react-toastify"; // Importando o Toastify
import "react-toastify/dist/ReactToastify.css"; // Estilos do Toastify
import {
  ResultsText,
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
  RelatedProductsHeader,
  ProductGrid,
} from "./style";
import { TENNIS } from "@/assets"; // Importe suas imagens de assets
import { ProductCard } from "@/components/@ui/ProductCard";
import { useCart } from "@/contexts/CartContext";

const products = [
  {
    id: 1,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    originalPrice: 200,
    currentPrice: 100,
    discount: 30,
    image: TENNIS.kSwiss,
  },
  {
    id: 2,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    originalPrice: 200,
    currentPrice: 100,
    discount: 30,
    image: TENNIS.kSwiss,
  },
  {
    id: 3,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    originalPrice: 200,
    currentPrice: 100,
    image: TENNIS.kSwiss,
  },
  {
    id: 4,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    originalPrice: 200,
    currentPrice: 100,
    image: TENNIS.kSwiss,
  },
];

export const ProductDetails = () => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const navigate = useNavigate();

  const product = {
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    category: "Tênis",
    originalPrice: 300,
    currentPrice: 219,
    discount: 30,
    images: [
      TENNIS.nikered,
      TENNIS.nikegreen,
      TENNIS.nikegray,
      TENNIS.nikeyellow,
    ],
    description:
      "O Tênis K-Swiss V8 Masculino é ideal para quem busca performance e estilo. Com um design moderno e materiais de alta qualidade, oferece conforto durante todo o dia. A sola de borracha garante aderência e estabilidade, enquanto o cabedal proporciona ventilação adequada para os pés.",
    rating: "5.0",
    reviews: 90,
  };

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
      toast.error("Selecione o tamanho e a cor.");
    } else if (!selectedSize) {
      toast.error("Escolha um tamanho para o produto.");
    } else if (!selectedColor) {
      toast.error("Escolha uma cor para o produto.");
    } else {
      addToCart();
      toast.success("Produto adicionado com sucesso!");
      // Resetar todos os estados após a compra
      setSelectedSize(null);
      setSelectedColor(null);
      setCurrentIndex(0); // Resetar a imagem para a primeira
    }
  };

  return (
    <>
      <ResultsText>
        Home / Produtos / Tênis / Nike /{" "}
        <span>Tênis Nike Revolution 6 Next Nature Masculino</span>
      </ResultsText>
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
            <CurrentPrice>R$ {product.currentPrice}.00</CurrentPrice>
            <OldPrice>R$ {product.originalPrice}</OldPrice>
          </ProductPrice>

          {/* Descrição do produto */}
          <ProductDescription>{product.description}</ProductDescription>

          {/* Tamanhos fixos */}
          <div className="size-options">
            <br />
            <br />
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
          <div className="color-options">
            <br />
            <br />
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
          <BuyButton onClick={handleBuyClick}>ADICIONAR</BuyButton>
        </TextContent>
      </CarouselContainer>

      <RelatedProductsHeader>
        <h2>Produtos Relacionados</h2>
        <button onClick={() => navigate("/produtos")}>Ver todos ➔</button>
      </RelatedProductsHeader>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>

      {/* ToastContainer para exibir os toasts */}
      <ToastContainer position="top-right" autoClose={4000} />
    </>
  );
};
