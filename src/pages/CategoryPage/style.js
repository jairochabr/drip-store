import styled from "styled-components";

export const CategoryTitle = styled.h2`
  margin-top: 6rem;
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 14rem;
  text-align: left;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  justify-items: center;
  align-items: center;
`;
