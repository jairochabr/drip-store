import styled from "styled-components";

export const Body = styled.main`
    background-color: #f9f8fe;
    display: flex;
    justify-content: center;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 10.1rem;
`;

export const Titulo = styled.h1`
    font-size: 3.2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 3.6rem;
    letter-spacing: 0.099rem;
    margin-top: 7rem;
    margin-bottom: 2.2rem;
`;

export const AllWrapper = styled.div`
    display: flex;
    gap: 2rem;
    

    .resumo {
        width: 46.8rem;
        height: 53.2rem;
        background-color: gray;
    }
`;

export const Wrapper = styled.div`
    width: 75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .formaDePagamento {
        
    }

    .infoCard {
        display: grid;
        grid-template-columns: 80% auto;
        gap: 2rem;
    }

    .infoCard2 {
        display: grid;
        grid-template-columns: 60% auto;
        gap: 2rem;
    }
`;
