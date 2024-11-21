import styled from "styled-components";

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
  cursor: pointer;

  &.active {
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.lightGray2};
    pointer-events: none; /* Garante que o ::after não bloqueie cliques */
  }

  a {
    font-family: ${({ theme }) => theme.font.family};
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;
    text-decoration: none; /* Remove sublinhado */
    color: ${({ theme }) => theme.colors.text};
    display: block; /* Expande o link para ocupar o tamanho do container */

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
  }
`;

export const Orders = styled.div`
  width: 27.4rem;
  height: 2.2rem;
  position: relative;
  cursor: pointer;

  &.active {
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.lightGray2};
    pointer-events: none; /* Garante que o ::after não bloqueie cliques */
  }

  a {
    font-family: ${({ theme }) => theme.font.family};
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;
    text-decoration: none; /* Remove sublinhado */
    color: ${({ theme }) => theme.colors.text};
    display: block; /* Expande o link para ocupar o tamanho do container */

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
  }
`;

export const Informations = styled.div`
  width: 27.4rem;
  height: 2.2rem;
  position: relative;
  cursor: pointer;

  &.active {
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.lightGray2};
    pointer-events: none; /* Garante que o ::after não bloqueie cliques */
  }

  a {
    font-family: ${({ theme }) => theme.font.family};
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;
    text-decoration: none; /* Remove sublinhado */
    color: ${({ theme }) => theme.colors.text};
    display: block; /* Expande o link para ocupar o tamanho do container */

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
  }
`;

export const Payment = styled.div`
  width: 27.4rem;
  height: 2.2rem;
  position: relative;
  cursor: pointer;

  &.active {
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  a {
    font-family: ${({ theme }) => theme.font.family};
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: 0.075rem;
    text-decoration: none; /* Remove sublinhado */
    color: ${({ theme }) => theme.colors.text};
    display: block; /* Expande o link para ocupar o tamanho do container */

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
  }
`;
