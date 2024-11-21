import styled from "styled-components";

export const CategoryTitle = styled.h2`
  margin-top: 6rem;
  font-size: 5rem; /* Aumentando o tamanho da fonte para um destaque maior */
  color: ${({ theme }) => theme.colors.white}; /* Cor da fonte agora é branca */
  font-weight: bold; /* Torna o título mais forte */
  margin-bottom: 20px;
  margin-left: 14rem; /* Distância do título para o canto esquerdo */
  text-align: left; /* Garante que o texto fique alinhado à esquerda */
  padding: 10px 20px; /* Espaçamento pequeno ao redor do texto */
  background-color: ${({ theme }) =>
    theme.colors.primary}; /* Cor de fundo para primary */
  border-radius: 5px; /* Bordas arredondadas */
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  /* Centralizando os itens */
  justify-items: center; /* Alinha horizontalmente */
  align-items: center; /* Alinha verticalmente */
`;
