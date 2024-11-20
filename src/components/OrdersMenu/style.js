import styled, { css } from "styled-components";

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 33.4rem;
  height: 26.8rem;
  padding: 3rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Profile = styled.div`
  width: 27.4rem;
  height: 2.2rem;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -2rem; /* Centraliza a linha no gap */
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.lightGray2};
  }

  a {
    font-family: ${({ theme }) => theme.font.family};;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;

    &.active {
        color:${({ theme }) => theme.colors.primary};
        font-weight: 700;
    } 
  }
`;

export const Orders = styled.div`
  width: 27.4rem;
  height: 2.2rem;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -2rem; /* Centraliza a linha no gap */
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.lightGray2};
  }

  a {
    font-family: ${({ theme }) => theme.font.family};;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;

    &.active {
        color:${({ theme }) => theme.colors.primary};
        font-weight: 700;
    } 
  }
`;

export const Informations = styled.div`
  width: 27.4rem;
  height: 2.2rem;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -2rem; /* Centraliza a linha no gap */
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.lightGray2};
  }

  a {
    font-family: ${({ theme }) => theme.font.family};;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;

    &.active {
        color:${({ theme }) => theme.colors.primary};
        font-weight: 700;
    } 
  }
`;

export const Payment = styled.div`
  width: 27.4rem;
  height: 2.2rem;
  padding: 0 0 2rem;

  a {
    font-family: ${({ theme }) => theme.font.family};;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;

    &.active {
        color:${({ theme }) => theme.colors.primary};
        font-weight: 700;
    } 
  }
`;
