import styled from "styled-components";

export const Bloco = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    background-color: ${({ theme }) => theme.colors.white};

    p {
        font-size: 1.4rem;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        line-height: 2.2rem;
        letter-spacing: 0.075rem;
    }

    hr {
        width: 100%;
    }
`;

