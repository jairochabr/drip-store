import styled from "styled-components";

export const CollectionCard = styled.div`
  width: 100%;
  height: 16rem;

  border-radius: 0.5rem 0rem 0rem 0rem;
  opacity: 0rem;
  position: relative;
  border: 0.0625rem solid #ddd;
  border-radius: 0.625rem;
  padding: 1.3rem 3rem;
  text-align: left;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #d8e3f2;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
  }

  .collection-image {
    width: 15rem;
    height: 15rem;
    border-radius: 0.625rem;
    z-index: -1;
    min-width: 8rem;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .collection-label {
    padding: 0.5rem 0rem 0.3rem;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.25rem;
    letter-spacing: 0.125rem;
    z-index: 1;
    position: relative;
    width: 100%;
    max-width: 12.5rem;
    word-wrap: break-word;
  }
`;

export const Discount = styled.div`
  background-color: #ccff90;
  width: 6rem;
  height: 2rem;
  color: #333;
  font-family: inter;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.3125rem 0.625rem;
  border-radius: 1.8125rem;
  margin-bottom: 0.625rem;
  z-index: 1;
  position: relative;
`;
