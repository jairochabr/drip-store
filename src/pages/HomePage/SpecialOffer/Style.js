import styled from "styled-components";
import { Button } from "@/components/@ui/Button";

export const Offer = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  max-width: calc(117rem + 4rem);
  padding-inline: 2rem;
  margin-inline: auto;
`;

export const Content = styled.div`
  margin-block: 8.6rem 0;
  display: flex;
  gap: 6.7rem;
  padding: 0;
`;

export const ImageContent = styled.div`
  width: 573px;
  height: 466px;
  position: relative;
  img {
    position: absolute;
    max-width: 573px;
    width: 100%;
    height: auto;
    z-index: 2;
    transform: scale(1.11);
    left: -4rem;
    top: 5rem;
  }

  &::before {
    content: "";
    width: 46.6rem;
    height: 46.6rem;
    border-radius: 46.6rem;
    background: linear-gradient(
      180deg,
      rgba(66, 0, 255, 0.25) -40.67%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    z-index: -1;
  }
`;

export const TextContent = styled.div`
  max-width: 589px;
  .subtitle {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.75px;
  }
  .title {
    color: ${({ theme }) => theme.colors.darkGray2};
    margin-block: 20px;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 50px;
  }
  .description {
    color: ${({ theme }) => theme.colors.darkGray2};
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.75px;
    margin-bottom: 3.2rem;
  }
`;

export const OfferButton = styled(Button)`
  padding: 1.6rem 6rem;
  color: ${({ theme }) => theme.colors.lightGray3};
  font-size: 14px;
  letter-spacing: 0.75px;
`;
