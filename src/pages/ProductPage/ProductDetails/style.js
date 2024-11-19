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
    border-radius: 10px;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
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
`;

export const TextContent = styled.div`
  width: 50%;
  padding: 0 20px;

  h1 {
    font-size: 28px;
    font-weight: bold;
  }
`;

export const ProductCategory = styled.p`
  font-size: 14px;
  color: #777;
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const RatingValue = styled.span`
  margin-left: 5px;
  font-weight: bold;
  color: #ffba00;
`;

export const ProductPrice = styled.div`
  margin: 15px 0;
`;

export const CurrentPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #d91467;
  margin-right: 10px;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #aaa;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
`;

export const SizeOptions = styled.div`
  display: flex;
  gap: 10px;

  button {
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;

    &.selected {
      background-color: #d91467;
      color: white;
    }
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
