import styled from "styled-components";

export const SlideContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8f9fb;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  overflow: hidden; /* Adicione esta linha para evitar a barra de rolagem */
  font-family: Arial, Helvetica, sans-serif;
`;

export const SlideImages = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`;

export const SlideImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  cursor: pointer;
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

export const ProductSize = styled.div`
  margin-top: 15px;
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

export const ProductColor = styled.div`
  margin-top: 15px;
`;

export const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ColorOption = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;

  &.red {
    background-color: red;
  }

  &.orange {
    background-color: orange;
  }

  &.gray {
    background-color: gray;
  }

  &.green {
    background-color: green;
  }

  &.selected {
    border: 2px solid white;
    box-shadow: 0 0 0 2px #d91467;
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
