import styled from "styled-components";

export const CollectionIcons = styled.div`
    width: 6.5rem;
  height: 8.625rem;

  border-radius: 0.5rem 0rem 0rem 0rem;
  opacity: 0rem;
  position: relative;
  text-align: center;
`

export const IconsCard = styled.div`
    width: 6.5rem;
  height: 6.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.75rem;
  border-radius: 50%;
  opacity: 0rem;
  position: relative;
  border: 0.0625rem solid #ddd;
  padding: 1.3rem 3rem;
  text-align: center;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`