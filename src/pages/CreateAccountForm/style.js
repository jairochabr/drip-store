import styled from "styled-components";

export const Container = styled.section`
    width: 75rem;
    display: flex;
    flex-direction: column;
`;

export const Titulo = styled.h1`
    font-size: 3.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 3.6rem;
    letter-spacing: 0.099rem;
`;

export const Bloco1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Bloco2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const Check = styled.input`
    
`;

export const Texto = styled.p``;