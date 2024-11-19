import styled from "styled-components";

export const StatusSection = styled.div`
    width: 89rem;
    height: 57.2rem;
    border-radius: 0.4rem;
    padding: 3rem;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const StatusHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 83rem;
    height: 2.2rem;

    position: relative;

    ::after {
        content: '';
        position: absolute;
        bottom: -2rem; /* Centraliza a linha no gap */
        left: 0;
        width: 100%;
        height: 0.1rem;
        background-color: ${({ theme }) => theme.colors.lightGray2};
    }

    span:first-child {
        width: 10.6rem;
        height: 2.2rem;
        font-family: ${({ theme }) => theme.font.family};
        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        letter-spacing: 0.075rem;
        text-align: center;
    }

    span:last-child {
        width: 8.6rem;
        height: 2.2rem;
        font-family: ${({ theme }) => theme.font.family};;
        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: ${({ theme }) => theme.font.weight.normal};
        letter-spacing: 0.075rem;
        text-align: center;
    }
`;

export const ProductStatus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 0 0 0;
    position: relative;

    ::after {
        content: '';
        position: absolute;
        bottom: -2rem; /* Centraliza a linha no gap */
        left: 0;
        width: 100%;
        height: 0.1rem;
        background-color: ${({ theme }) => theme.colors.lightGray2};
    }
`;

export const ProductDetails = styled.div`
    display: flex;
    gap: 2rem;

    .image {
        width: 7.118rem;
        height: 5.8rem;
        background-color: #E2E3FF;
        border-radius: 0.267rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 5.063rem;
            height: 2.519rem;
        }
    }

    .details {
        display: flex;
        flex-direction: column;
        width: 42.1rem;
        height: 4.2rem;

        span:first-child {
            width: 42.1rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.medium};
            color: ${({ theme }) => theme.colors.lightGray};
            letter-spacing: 0.075rem;
            text-align: start;
    }

    span:last-child {
            width: 42.1rem;
            height: 2rem;
            font-family: ${({ theme }) => theme.font.family};;
            font-size: 1.4rem;
            line-height: 2rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            color: ${({ theme }) => theme.colors.darkGray};
            letter-spacing: 0.075rem;
            text-align: start;
    }
    }
`;

export const Status = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.6rem;
    height: 2.2rem;

    span {
        font-family: ${({ theme }) => theme.font.family};
        font-weight: ${({ theme }) => theme.font.weight.bold};
        font-size: 1.4rem;
        line-height: 2rem;
        letter-spacing: 0.075rem;
        color: ${({ status, theme }) => {
            if (status === 'Em trânsito') return theme.colors.warning;
            if (status === 'Cancelado') return theme.colors.error;
            if (status === 'Finalizado') return theme.colors.lightGray;
            return '#333'; // Cor padrão
        }};
    }
`;