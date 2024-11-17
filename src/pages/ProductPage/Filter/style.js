import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 30rem;
  padding: 2rem;
  border: 0.1rem solid #${({ theme }) => theme.colors.darkGray3};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: Arial, sans-serif;
`;

export const FilterTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray2};
  padding-bottom: 1.5rem;
`;

export const FilterSection = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const FilterOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;

  span {
    margin-left: 1rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.darkGray2};
  }
`;

export const FilterCheckbox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray3};
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:checked::before {
    content: "✓";
    display: block;
    text-align: center;
    color: white;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const FilterRadio = styled.input`
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.darkGray3};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:checked {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:checked::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.darkGray2};
  border-radius: 0.4rem;
`;
