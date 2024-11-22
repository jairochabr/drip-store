import styled from "styled-components";

// Grid para os produtos
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 itens por linha */
  gap: 20px;
  justify-items: center;
`;

// Estilo para cada item de produto, caso queira um estilo adicional
export const ProductItem = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
