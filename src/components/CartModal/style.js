import styled from "styled-components";
import { Button } from "../@ui/Button";

export const ModalContainer = styled.div`
  height: 454px;
  width: 316px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 5rem;
  right: 3rem;
  z-index: 5;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .title {
    color: ${({ theme }) => theme.colors.darkGray2};
    font-size: 1.6rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
  }
`;

export const ItemsContainer = styled.div`
    flex: 1;
    overflow-y: auto;
    padding-block: 2rem 0;
    
    /* Esconde a scrollbar no Firefox */
    scrollbar-width: none;
    
    /* Esconde a scrollbar no Chrome, Safari e Edge */
    &::-webkit-scrollbar {
      display: none;
    }
    
    /* Garante que o conteúdo não seja cortado */
    -ms-overflow-style: none; /* Para Internet Explorer e Edge */
`

export const CartInfos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const CartImage = styled.div`
  width: 15.4rem;
  height: 6.4rem;
  padding: 16px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 2.669px 16.682px 0px rgba(0, 0, 0, 0.05);

  img {
    width: 66px;
    height: 32px;
  }
`;

export const ProductInfos = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 1.4rem;
    padding-bottom: 0.8rem;
    border: none;
    line-height: 2.4rem;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .currentPrice span {
    color: ${({ theme }) => theme.colors.darkGray2};
    font-size: 1.6rem;
    font-weight: 700;
  }

  .originalPrice span {
    color: ${({ theme }) => theme.colors.lightGray2};
    font-size: 1.2rem;
    font-weight: 400;
    text-decoration: line-through;
  }
`;

export const CartPrice = styled.div`
  display: flex;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.darkGray};
  justify-content: space-between;
  padding-block: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray2};
  .totalPrice {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const CartButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonEmpty = styled.button`
  color: ${({ theme }) => theme.colors.darkGray2};
  font-size: 1.6rem;
  font-weight: 500;
  background: transparent;
  text-decoration: underline;
  cursor: pointer;
  border: none;
`;

export const CartButton = styled(Button)`
  font-size: 1.4rem;
  padding: 1.5rem 1.6rem;
`;
