import styled from "styled-components";

export const TrendingSection = styled.section`
  background: #f9f8fe;
`;

export const TrendingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    color: ${({ theme }) => theme.colors.darkGray2};
    font-size: 2.4rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const TrendingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-block: 2rem;
  gap: 24px;

  /* Responsividade */
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;
