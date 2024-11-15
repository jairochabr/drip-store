import styled from "styled-components";

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.darkGray2};
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 2.4rem;
    letter-spacing: 0.075rem;
`;

export const Input = styled.input`
    width: 100%;
    height: 6rem;
    background-color: #f8f8f8;
    border: none;
    border-radius: 0.8rem;
    padding: 0 0 0 1.2rem;
    &::placeholder {
        color: #a9a9a9;
        font-size: 1.6rem;
        line-height: 2.8rem;
        letter-spacing: 0.075rem;
    }
`;

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;