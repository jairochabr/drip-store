import styled from "styled-components";

export const FeaturedStyle = styled.section`
  background: #f9f8fe;
`;

export const TrendingProducts = styled.div`
  padding-block: 3rem; /* tira depois essa propriedade */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  /* Responsividade */
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;
