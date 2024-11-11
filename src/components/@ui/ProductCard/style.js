import styled from "styled-components";

export const ProductCardStyle = styled.article`
  max-width: 29.2rem;
  position: relative;
  cursor: pointer;
  transition: transform 300ms ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const DiscountStyle = styled.div`
  width: 9.6rem;
  height: 3.2rem;
  border-radius: 2.9rem;
  background: #e7ff86;
  padding: 0.5rem 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGray2};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.75px;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 1;
`;

export const ProductImage = styled.figure`
  height: 32.1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  box-shadow: 6px 16px 30px 0px rgba(105, 98, 98, 0.05);
  display: flex;
  align-items: center;
`;

export const ProductInfos = styled.div`
  .ProductCategory {
    margin-top: 1.8rem;
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2.4rem;
    letter-spacing: 0.75px;
  }

  .ProductName {
    color: ${({ theme }) => theme.colors.darkGray2};
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3.8rem;
    letter-spacing: 0.75px;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  .OriginalPrice span {
    text-decoration: line-through;
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3.8rem;
    letter-spacing: 0.75px;
  }

  .CurrentPrice span {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.8rem;
    letter-spacing: 0.75px;
  }
`;
