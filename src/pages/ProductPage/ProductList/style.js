import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Estilo para 3 colunas */
  margin-right: 7.1rem;
  gap: 1.5rem;

  /* Responsividade */
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;
