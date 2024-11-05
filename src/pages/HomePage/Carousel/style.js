import styled from "styled-components";
import { Button } from "@/components/@ui/Button";
import { Ornament } from "@/assets";


export const CarouselStyle = styled.div`
  height: 681px;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.lightGray3};

  &::before {
    content: "";
    background-image: url(${Ornament});
    height: 140px;
    width: 140px;
    position: absolute;
    right: 7.5rem;
    top: 6.2rem;
  }

  @media (max-width: 540px) {
    height: 662px;

    &::before {
      right: -72px;
      top: 20px;
    }
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  transition: ${(props) =>
    props.$transition ? "transform 0.5s ease" : "none"};
  position: relative;
  transform: translateX(-${(props) => props.$currentIndex * 100}%);
`;

export const SlideStyles = styled.div`
  flex: 0 0 100%;
`;

export const ContentStyle = styled.div`
  margin-block: 104px 50px;
  max-width: 121rem;
  padding-inline: 20px;
  margin-inline: auto;
  display: flex;
  gap: 68px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    margin-block: 60px 92px;
  }
`;

export const TextContent = styled.div`
  max-width: 512px;

  @media (max-width: 768px) {
    margin-inline: auto;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.warning};
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 64px;
  font-weight: 800;
  line-height: 66px;
  letter-spacing: 1px;
  margin-block: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 1.25;
    margin-block: 10px 20px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray2};
  font-size: 18px;
  line-height: 34px;
  letter-spacing: 0.75px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.57;
    letter-spacing: 0.2496px;
  }
`;

export default styled(Button)`
  width: 220px;
  height: 48px;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const ImageContent = styled.div`
  margin-right: 62px;
  width: 608px;
  height: 405px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 186px;
    margin: auto;
  }

  @media (max-width: 540px) {
    width: 220px;
    height: 156px;
  }
`;

export const DotsStyles = styled.div`
  position: absolute;
  bottom: 52px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

  @media (max-width: 768px) {
    bottom: 40px;
  }
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.primary : props.theme.colors.lightGray2};
`;
