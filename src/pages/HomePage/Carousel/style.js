import styled from "styled-components";
import { Button } from "@/components/@ui/Button";
import { Ornament } from "@/assets";

export const Carousel = styled.div`
  height: 68.1rem;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.lightGray3};

  &::before {
    content: "";
    background-image: url(${Ornament});
    height: 14rem;
    width: 14rem;
    position: absolute;
    right: 7.5rem;
    top: 6.2rem;
  }

  @media (max-width: 540px) {
    height: 66.2rem;

    &::before {
      right: -7.2rem;
      top: 2rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  transition: ${(props) =>
    props.$transition ? "transform 0.5s ease" : "none"};
  position: relative;
  transform: translateX(-${(props) => props.$currentIndex * 100}%);
`;

export const Slide = styled.div`
  flex: 0 0 100%;
`;

export const Content = styled.div`
  margin-block: 10.4rem 5rem;
  max-width: 121rem;
  padding-inline: 2rem;
  margin-inline: auto;
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    margin-block: 6rem 9.2rem;
  }
`;

export const TextContent = styled.div`
  max-width: 56.4rem;

  .Subtitle {
    color: ${({ theme }) => theme.colors.warning};
    font-weight: 700;
    line-height: 2.4rem;
    letter-spacing: 0.75px;
  }

  .Title {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 6.4rem;
    font-weight: 800;
    line-height: 6.6rem;
    letter-spacing: 1px;
    margin-block: 2rem;
  }

  .Description {
    color: ${({ theme }) => theme.colors.darkGray2};
    font-size: 1.8rem;
    line-height: 3.4rem;
    letter-spacing: 0.75px;
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    margin-inline: auto;

    .Subtitle {
      font-size: 1.4rem;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.primary};
    }

    .Title {
      font-size: 3.6rem;
      line-height: 1.25;
      margin-block: 1rem 2rem;
    }

    .Description {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.57;
      letter-spacing: 0.2496px;
    }
  }
`;

export const SlideButton =  styled(Button)`
  width: 22rem;
  height: 4.8rem;

  @media (max-width: 768px) {
    width: 30rem;
  }
`;

export const ImageContent = styled.div`
  margin-right: 62px;
  width: 60.8rem;
  height: 40.5rem;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 25rem;
    height: 18.6rem;
    margin: auto;
  }

  @media (max-width: 540px) {
    width: 22rem;
    height: 15.6rem;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 5.2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  @media (max-width: 768px) {
    bottom: 4rem;
  }
`;

export const Dot = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  border: none;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.primary : props.theme.colors.lightGray2};
`;
