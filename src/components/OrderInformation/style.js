import styled from "styled-components";

export const InformationSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 89rem;
    height: 46.6rem;
    border-radius: 0.4rem;
    padding: 3rem;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const InformationHeader = styled.div`
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

    span {
        width: 15.5rem;
        height: 2.2rem;
        font-family: ${({ theme }) => theme.font.family};
        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        color: ${({ theme }) => theme.colors.darkGray2};
        letter-spacing: 0.075rem;
        text-align: left;
        
    }

    a {
        width: 8.6rem;
        height: 2.2rem;
        font-family: ${({ theme }) => theme.font.family};
        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: ${({ theme }) => theme.font.weight.medium};
        color: ${({ theme }) => theme.colors.primary};
        letter-spacing: 0.075rem;
        text-align: center;
        text-decoration: underline;
    }
`;

export const PersolnalInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 83rem;
    height: 15.2rem;
    gap: 1rem;
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

    span {
        width: 18.7rem;
        height: 2.4rem;
        font-family: ${({ theme }) => theme.font.family};
        font-size: 1.6rem;
        line-height: 2.2rem;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        color: ${({ theme }) => theme.colors.darkGray2};
        letter-spacing: 0.075rem;
    }

    .name {
        display: flex;

        span:first-child {
            width: 7rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            color: ${({ theme }) => theme.colors.lightGray};
            letter-spacing: 0.075rem;
        }

        span:last-child {
            width: 70rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.medium};
            color: ${({ theme }) => theme.colors.darkGray};
            letter-spacing: 0.075rem;
        }
    }

    .CPF {
        display: flex;

        span:first-child {
            width: 7rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            color: ${({ theme }) => theme.colors.lightGray};
            letter-spacing: 0.075rem;
        }

        span:last-child {
            width: 70rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.medium};
            color: ${({ theme }) => theme.colors.darkGray};
            letter-spacing: 0.075rem;
        }
    }

    .email {
        display: flex;

        span:first-child {
            width: 7rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            color: ${({ theme }) => theme.colors.lightGray};
            letter-spacing: 0.075rem;
        }

        span:last-child {
            width: 70rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.medium};
            color: ${({ theme }) => theme.colors.darkGray};
            letter-spacing: 0.075rem;
        }
    }

    .phone {
        display: flex;

        span:first-child {
            width: 7rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            color: ${({ theme }) => theme.colors.lightGray};
            letter-spacing: 0.075rem;
        }

        span:last-child {
            width: 70rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.medium};
            color: ${({ theme }) => theme.colors.darkGray};
            letter-spacing: 0.075rem;
        }
    }

`;

export const DeliveryInformations = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 83rem;
    height: 15.2rem;
    gap: 1rem;
    position: relative;

    span {
        width: 20.7rem;
        height: 2.4rem;
        font-family: ${({ theme }) => theme.font.family};
        font-size: 1.6rem;
        line-height: 2.2rem;
        font-weight: ${({ theme }) => theme.font.weight.bold};
        color: ${({ theme }) => theme.colors.darkGray2};
        letter-spacing: 0.075rem;
    }

    .address {
        display: flex;

        span:first-child {
            width: 8rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            color: ${({ theme }) => theme.colors.lightGray};
            letter-spacing: 0.075rem;
        }

        span:last-child {
            width: 70rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.medium};
            color: ${({ theme }) => theme.colors.darkGray};
            letter-spacing: 0.075rem;
        }
    }

    .neighborhood {
        display: flex;

        span:first-child {
            width: 8rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            color: ${({ theme }) => theme.colors.lightGray};
            letter-spacing: 0.075rem;
        }

        span:last-child {
            width: 70rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.medium};
            color: ${({ theme }) => theme.colors.darkGray};
            letter-spacing: 0.075rem;
        }
    }

    .city {
        display: flex;

        span:first-child {
            width: 8rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            color: ${({ theme }) => theme.colors.lightGray};
            letter-spacing: 0.075rem;
        }

        span:last-child {
            width: 70rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.medium};
            color: ${({ theme }) => theme.colors.darkGray};
            letter-spacing: 0.075rem;
        }
    }

    .CEP {
        display: flex;

        span:first-child {
            width: 8rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.bold};
            color: ${({ theme }) => theme.colors.lightGray};
            letter-spacing: 0.075rem;
        }

        span:last-child {
            width: 70rem;
            height: 2.2rem;
            font-family: ${({ theme }) => theme.font.family};
            font-size: 1.4rem;
            line-height: 2.2rem;
            font-weight: ${({ theme }) => theme.font.weight.medium};
            color: ${({ theme }) => theme.colors.darkGray};
            letter-spacing: 0.075rem;
        }
    }
`;
