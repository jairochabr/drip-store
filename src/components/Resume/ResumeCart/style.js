import styled from "styled-components";
import { Button } from "../../@ui/Button/index";

export const ResumeContainer = styled.div`
  width: 33.4rem;
  height: 36.4rem;
  padding: 3rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};

  h1 {
    width: 27.4rem;
    height: 2.2rem;
    padding-bottom: 4.5rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lightGray2};
    font-family: ${({ theme }) => theme.font.family};;
    font-size: 1.4rem;
    line-height: 3.8rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;
  }
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27.4rem;
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
  width: 27.4rem;
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
  width: 27.4rem;
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
  width: 27.4rem;
  height: 5.6rem;
  border-radius: 0.4rem;
  padding: 2rem 0;
  margin-bottom: 4rem;
  align-items: center;

  .price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 27.4rem;
    height: 3.4rem;

        h2:first-child {
        width: 4.7rem;
        height: 3.4rem;
        font-family: ${({ theme }) => theme.font.family};;
        font-size: 1.8rem;
        line-height: 3.4rem;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        letter-spacing: 0.075rem;
        color: ${({theme}) => theme.colors.darkGray};
        }

        h2:last-child {
        width: 9.5rem;
        height: 3.4rem;
        font-family: ${({ theme }) => theme.font.family};;
        font-size: 1.8rem;
        line-height: 3.4rem;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        letter-spacing: 0.075rem;
        color: ${({theme}) => theme.colors.error};
        }
  }

    .detail {
        width: 27.4rem;
        height: 2.2rem;
        margin-bottom: 2rem;
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
  display: flex;
  justify-content: center;
 width: 27.4rem;
 height: 4rem;
`;