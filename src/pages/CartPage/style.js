import styled from "styled-components";

export const CartSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.6rem;
    background-color: ${({theme}) => theme.colors.lightGray3};
    padding: 8rem 0;
`;