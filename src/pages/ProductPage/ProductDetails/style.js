import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8f9fb;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CarouselImages = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;

  img {
    max-width: 100%;
    border-radius: 5px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    margin-bottom: 1rem;
    padding: 10px; /* Adicionando um pequeno preenchimento */
  }

  /* Aplique o fundo pastel com base no índice da imagem */
  .image-0 {
    background-color: #ff6f61; /* Rosa pastel */
  }

  .image-1 {
    background-color: #a8d5ba; /* Verde pastel */
  }

  .image-2 {
    background-color: #d3d3d3; /* Azul pastel */
  }

  .image-3 {
    background-color: #fffacd; /* Amarelo pastel */
  }
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  &.prev {
    left: -25px;
  }

  &.next {
    right: -25px;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 15px; /* Aumentado o espaço entre as miniaturas */
`;

export const Thumbnail = styled.img`
  width: 100px; /* Aumentado o tamanho das miniaturas */
  height: 100px; /* Aumentado o tamanho das miniaturas */
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.7")};
  border: ${({ isActive }) => (isActive ? "2px solid #d91467" : "none")};
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;

  /* Fundo pastel para as miniaturas com base no índice */
  &:nth-child(1) {
    background-color: #ff6f61; /* Rosa pastel */
  }

  &:nth-child(2) {
    background-color: #a8d5ba; /* Verde pastel */
  }

  &:nth-child(3) {
    background-color: #d3d3d3; /* Azul pastel */
  }

  &:nth-child(4) {
    background-color: #fffacd; /* Amarelo pastel */
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 500px;
`;

export const ProductCategory = styled.h3`
  color: #7d7d7d;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #ffcc00;
`;

export const RatingValue = styled.span`
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-top: 15px;
`;

export const CurrentPrice = styled.span`
  color: #d91467;
  font-size: 26px;
  font-weight: bold;
`;

export const OldPrice = styled.span`
  color: #888;
  text-decoration: line-through;
  margin-left: 10px;
`;

export const ProductDescription = styled.p`
  color: #333;
  font-size: 14px;
  margin-top: 15px;
`;

export const SizeOptions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;

  button {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
  }

  button.selected {
    background-color: #d91467;
    color: white;
  }
`;

export const ColorOptions = styled.div`
  display: flex;
  gap: 10px;

  .color {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &.selected {
      border: 2px solid white;
      box-shadow: 0 0 0 2px #d91467;
    }

    &.red {
      background-color: red;
    }

    &.yellow {
      background-color: yellow;
    }

    &.gray {
      background-color: gray;
    }

    &.green {
      background-color: green;
    }
  }
`;

export const BuyButton = styled.button`
  width: 40%;
  background-color: #ffa500;
  color: white;
  font-size: 16px;
  padding: 12px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #ff8c00;
  }
`;
