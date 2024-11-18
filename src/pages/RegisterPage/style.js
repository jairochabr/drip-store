import styled from "styled-components";

export const Body = styled.main`
    background-color: #f9f8fe;
`;

export const Container = styled.section`
    width: 75rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    Button {
        height: 4.8rem;
        margin-bottom: 15.3rem;
    }
`;

export const Titulo = styled.h1`
    font-size: 3.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 3.6rem;
    letter-spacing: 0.099rem;
    margin-top: 7rem;
    margin-bottom: 2.2rem;
`;

export const Newslatter = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 3rem;
    margin-bottom: 4rem;

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