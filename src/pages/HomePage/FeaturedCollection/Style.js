import styled from "styled-components";

export const Collection = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f8fe;
`;

export const CollectionContainer = styled.div`
  width: 100%;
  max-width: calc(1170px + 40px);
  padding-inline: 2rem;
  margin-inline: auto;
`;

export const HeaderCollection = styled.div`
  margin: 2.3rem 0rem 0rem;
  color: ${({ theme }) => theme.colors.darkGray2};
  align-items: center;
  padding-bottom: 1.25rem;
`;

export const ProductCollection = styled.div`
  justify-content: center;
  display: flex;
  gap: 2rem;
`;



export const CollectionIconHead = styled.div`
  padding-bottom: 1.25rem;
  padding-top: 6.25rem;
  text-align: center;
`;

export const ColIcon = styled.div`
  margin-inline: 0.875rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 0.8rem;
`;
