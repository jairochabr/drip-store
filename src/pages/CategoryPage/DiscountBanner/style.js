import styled from "styled-components";

// Container geral do banner
export const BannerContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Alinha verticalmente ao centro */
  background-color: ${({ theme }) =>
    theme.colors.primary}; /* Cor de fundo do banner */
  padding: 20px 40px; /* Ajustando o padding */
  margin-bottom: 20px; /* Espaçamento abaixo do banner */
  width: 100%; /* Garantir que o container ocupe toda a largura */
  height: 200px; /* Definindo a altura do banner */
  cursor: pointer;
`;

// Texto principal do banner
export const BannerText = styled.p`
  font-size: 4.5rem; /* Aumentando o tamanho da fonte */
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  text-align: center; /* Centraliza o texto */

  strong {
    color: yellow; /* Cor do destaque para o 45% OFF */
    animation: blink 1s infinite; /* Animação de piscar */
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// Botão do banner
export const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5rem; /* Espaço entre o texto e o botão */

  &:hover {
    background-color: #333; /* Cor do botão ao passar o mouse */
  }
`;
