import styled from "styled-components";

export const Container = styled.section`
    width: 75rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const Titulo = styled.h1`
    font-size: 3.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 3.6rem;
    letter-spacing: 0.099rem;
`;

export const Newslatter = styled.div`
    display: flex;
    gap: 1rem;

    input[type="checkbox"]{
        width: 2.8rem;
        height: 2.8rem;
    }
    
    input[type="checkbox"]:checked {
        accent-color: ${({ theme }) => theme.colors.primary};
    }
    
    p {
        font-size: 1.4rem;
        font-weight: ${({ theme }) => theme.font.weight.medium};
        line-height: 2.2rem;
        letter-spacing: 0.025rem;

    }
`;