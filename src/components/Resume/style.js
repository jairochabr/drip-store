import styled from "styled-components";

export const ResumeContainer = styled.div`
  width: 46.8rem;
  height: 53.2rem;
  background-color: gray;
  padding: 3rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};

  h1 {
    width: 40.8rem;
    height: 3.8rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lightGray2};
    font-family: ${({ theme }) => theme.font.family};;
    font-size: 2.4rem;
    line-height: 3.8rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;
  }
`;

export const ProductImage = styled.div`
  width: 40.8rem;
  height: 5.8rem;
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
  padding: 0 0 1.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lightGray2};
  align-items: center;

  img {
    width: 7.118rem;
    height: 5.8rem;
    border-radius: 0.267rem;
  }

  h5 {
    width: 31.782rem;
    height: 4rem;
    font-family: ${({ theme }) => theme.font.family};;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;
    color: ${({theme}) => theme.colors.darkGray};
  }
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 14px;
`;

export const Frete = styled(Subtotal)``;

export const Desconto = styled(Subtotal)``;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: beige;
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  margin: 15px 0;

  h2 {
    font-size: 18px;
  }

  .price {
    display: flex;
    flex-direction: column;
    text-align: right;

    span {
      font-size: 10px;
    }
  }
`;