import styled from "styled-components";

// Container geral do banner
export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px 40px;
  margin-bottom: 20px;
  width: 100%;
  height: 200px;
  cursor: pointer;
`;

// Texto principal do banner
export const BannerText = styled.p`
  font-size: 4.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  text-align: center;

  strong {
    color: yellow;
    animation: blink 1s infinite;
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
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
