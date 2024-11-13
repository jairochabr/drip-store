import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(201, 32, 113, 0.2));
  }
  50% {
    filter: drop-shadow(0 0 12px rgba(201, 32, 113, 0.4));
  }
`;

const colorPulse = keyframes`
  0%, 100% {
    fill: #C92071;
  }
  50% {
    fill: #e93b93;
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-24px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 9999;
  opacity: 1;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const SpinnerSvg = styled.svg`
  width: 4.8rem;
  height: 4.8rem;
  transform-origin: center;
  opacity: 0;
  animation: ${spin} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite,
    ${pulse} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite,
    ${fadeIn} 0.5s ease-in forwards;

  path {
    fill: #c92071;
    transform-origin: center;
    animation: ${colorPulse} 1.5s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export const StoreName = styled.svg`
  width: 20.8rem;
  height: 3.6rem;
  opacity: 0;
  animation: ${slideIn} 0.8s ease 0.3s forwards;

  path {
    fill: #c92071;
  }

  @media (max-width: 768px) {
    width: 15.6rem;
    height: 2.7rem;
  }
`;
