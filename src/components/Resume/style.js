import styled from "styled-components";
import { Button } from "../@ui/Button";

export const ResumeContainer = styled.div`
  width: 46.8rem;
  height: 53.2rem;
  padding: 3rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};

  h1 {
    width: 40.8rem;
    height: 5.8rem;
    padding-bottom: 2rem;
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
  height: 7.5rem;
  display: flex;
  gap: 2rem;
  margin: 3rem 0 0 0;
  padding: 0 0 3rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lightGray2};
  align-items: center;


  .image {
    width: 7.118rem;
    height: 5.8rem;
    border-radius: 0.267rem;
    background-color: #E2E3FF;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 5.063rem;
      height: 2.519rem;
      border-radius: 0.267rem;
      margin: 0 auto;
    }
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
  width: 40.8rem;
  height: 2.2rem;
  font-family: ${({ theme }) => theme.font.family};;
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  letter-spacing: 0.025rem;
  color: ${({theme}) => theme.colors.darkGray};
  padding: 2rem 0;
  span:first-child {
  color: ${({theme}) => theme.colors.lightGray}
  }
`;

export const Frete = styled(Subtotal)`
  display: flex;
  justify-content: space-between;
  width: 40.8rem;
  height: 2.2rem;
  font-family: ${({ theme }) => theme.font.family};;
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  letter-spacing: 0.025rem;
  color: ${({theme}) => theme.colors.darkGray};

  span:first-child {
  color: ${({theme}) => theme.colors.lightGray}
  }
`;

export const Desconto = styled(Subtotal)`
display: flex;
  justify-content: space-between;
  width: 40.8rem;
  height: 2.2rem;
  font-family: ${({ theme }) => theme.font.family};;
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  letter-spacing: 0.025rem;
  color: ${({theme}) => theme.colors.darkGray};

  span:first-child {
  color: ${({theme}) => theme.colors.lightGray}
  }
`;

export const Total = styled.div`
  width: 40.8rem;
  height: 10rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #F6AA1C26;
  padding: 2rem;
  margin: 17px 0;
  background-color: #F6AA1C0D;
  align-items: center;


  .price{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price h2:first-child {
      width: 6.2rem;
      height: 3.8rem;
      font-family: ${({ theme }) => theme.font.family};;
      font-size: 2.4rem;
      line-height: 2rem;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      letter-spacing: 0.075rem;
      color: ${({theme}) => theme.colors.darkGray};
    }

    .price h2:last-child {
      width: 12.5rem;
      height: 3.8rem;
      font-family: ${({ theme }) => theme.font.family};;
      font-size: 2.4rem;
      line-height: 2rem;
      font-weight: ${({ theme }) => theme.font.weight.bold};
      letter-spacing: 0.075rem;
      color: ${({theme}) => theme.colors.darkGray};
    }
  }

  .detail {
    width: 36.8rem;
    height: 2.2rem;
    font-family: ${({ theme }) => theme.font.family};;
    font-size: 1.2rem;
    line-height: 2.2rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    letter-spacing: 0.1rem;
    color: ${({theme}) => theme.colors.lightGray};
    text-align: right;
  }
`;

export const CustomButton = styled(Button)`
 width: 40.8rem;
 height: 5rem;
`;