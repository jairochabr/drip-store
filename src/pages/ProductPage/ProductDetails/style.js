import styled from "styled-components";

export const ResultsText = styled.span`
  display: flex;
  font-size: 1.4rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.darkGray3};
  cursor: pointer;
  right: 83.5rem;
  margin-inline: 15.3rem;
  span {
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  max-width: 1410px;
  margin: 0 auto;
  background-color: #f8f9fb;

  font-family: Arial, Helvetica, sans-serif;
  margin-top: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightGray};
  margin-right: 2rem;
`;

export const CarouselImages = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 14rem;

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
  color: ${({ theme }) => theme.colors.darkGray2};

  margin-top: -4rem;

  &.prev {
    left: 5.5rem;
  }

  &.next {
    right: 5.5rem;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 15px;
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

export const RelatedProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -8rem;
  margin-inline: 15rem;
  cursor: pointer;

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGray2};
  }

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProductGrid = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5rem;
  margin-bottom: 5rem;
  background-color: #f8f9fb;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 50rem;
  margin-bottom: 30rem;

  h1 {
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
  }
`;

export const ProductCategory = styled.h3`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-top: 2rem;
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
`;

export const ProductRating = styled.div`
  display: flex;
  justify-content: around;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightGray};
  gap: 0.5rem;
`;

export const RatingValue = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.warning};
  border-radius: 0.2rem;
  padding: 0.3rem;
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
  color: ${({ theme }) => theme.colors.lightGray};
  text-decoration: line-through;
  margin-left: 10px;
`;

export const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray2};
  font-weight: 500;
  font-size: 1.4rem;
  margin-top: 3rem;
`;

export const SizeOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.lightGray}; /* Adicionando a cor */
  font-weight: bold;

  button {
    padding: 1.2rem;
    font-size: 1.4rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.lightGray2};
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
  gap: 2.5rem;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.lightGray}; /* Adicionando a cor */
  font-weight: bold;
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
