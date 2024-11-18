import styled from "styled-components";

export const CartSection = styled.div`
    width: 89rem;
    height: 35.2rem;
    padding: 3rem;
    border-radius: 0.4rem;
    background-color: ${({theme}) => theme.colors.white}; 
`;

export const CartInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 83rem;
    height: 2.2rem;
    border-bottom: 0.1rem solid ${({theme}) => theme.colors.lightGray2};
    font-family: ${({theme}) => theme.font.family};
    font-size: 1.4rem;
    line-height: 2.2rem;
    letter-spacing: 0.075rem;
    font-weight: ${({theme}) => theme.font.weight.bold};

    .info-section {
        display: flex;
        justify-content: space-around;
        gap: 3rem;
        width: 34.629rem;
        height: 2.2rem;
        font-family: ${({theme}) => theme.font.family};
        font-size: 1.4rem;
        line-height: 2.2rem;
        letter-spacing: 0.075rem;
        font-weight: ${({theme}) => theme.font.weight.medium};

        span:first-child {
            width: 11.229rem;
            height: 2.2rem;
            text-align: center;
        } 
        
        span:nth-child(2) {
            width: 8.6rem;
            height: 2.2rem;
            text-align: center;
        }

        span:last-child {
            width: 8.6rem;
            height: 2.2rem;
            text-align: center;
        }
    }
`;

export const CartContent = styled.div`
    width: 83rem;
    height: 10.4rem;
    padding: 3rem;
    border-radius: 4rem;
`;

export const ProductImage = styled.div`
    width: 89rem;
    height: 35.2rem;
    padding: 3rem;
    border-radius: 4rem;
`;

export const ProductDetails = styled.div`
    width: 89rem;
    height: 35.2rem;
    padding: 3rem;
    border-radius: 4rem;
`;

export const ProductCount = styled.div`
    width: 89rem;
    height: 35.2rem;
    padding: 3rem;
    border-radius: 4rem;
`;

export const ProductPrice = styled.div`
    width: 89rem;
    height: 35.2rem;
    padding: 3rem;
    border-radius: 4rem;
`;