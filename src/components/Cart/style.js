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
    height: 4rem;
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
    display: flex;
    justify-content: space-between;
    width: 83rem;
    height: 10.4rem;
    margin: 2.5rem 0;

    .content {
        width: 36.6rem;
        height: 10.4;
        display: flex;
        gap: 2rem;
        padding-bottom: 2rem;

        .image {
            width: 12.763rem;
            height: 10.4rem;
            background-color: #E2E3FF;
            border-radius: 0.479rem;
            box-shadow: 0px 4.79px 29.91px 0px #0000000D;
            display: flex;
            justify-content: center;
            align-items: center;
    
            img {
                width: 9.078rem;
                height: 4.517rem;
                border-radius: 0.479rem;
            }
        }
        
        .details {
            width: 21.9rem;
            height: 10.1rem;
            padding-bottom: 2rem;

            h5 {
                width: 21.9rem;
                height: 4rem;
                font-family: ${({theme}) => theme.font.family};
                font-size: 1.4rem;
                line-height: 2rem;
                letter-spacing: 0.075rem;
                font-weight: ${({theme}) => theme.font.weight.bold};
            }
    
            .color {
                display: flex;
                width: 16.7rem;
                height: 2.3rem;
                font-family: ${({theme}) => theme.font.family};
                font-size: 1.4rem;
                line-height: 2.2rem;
                letter-spacing: 0.025rem;
                font-weight: ${({theme}) => theme.font.weight.medium};
                margin: 1rem 0;

                span:first-child {
                    color: ${({theme}) => theme.colors.lightGray};
                }

                span:last-child {
                    width: 12.8rem;
                    height: 2.2rem;
                    color: ${({theme}) => theme.colors.darkGray};
                    margin: 0 1rem;
                }
            }
    
            .size {
                display: flex;
                font-family: ${({theme}) => theme.font.family};
                font-size: 1.4rem;
                line-height: 2.2rem;
                letter-spacing: 0.025rem;
                font-weight: ${({theme}) => theme.font.weight.medium};
                margin: 1rem 0;

                span:first-child {
                    color: ${({theme}) => theme.colors.lightGray}
                }

                span:last-child {
                    color: ${({theme}) => theme.colors.darkGray};
                    margin: 0 1rem;
                }
            }
        }
    }

`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 34.629rem;
    gap: 3rem;

    .productCount {
        display: flex;
        flex-direction: column;
        width: 11.229rem;
        height: 7.3rem;
    
        .count {
            display: flex;
            flex-direction: row;
            justify-content: center;
    
            button {
                width: 3.5rem;
                height: 3.5rem;
            }
        
            span {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 3.5rem;
                height: 3.5rem;
            }
        }
    
        .removeItem {
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
    
            a{
                text-decoration: underline;
                cursor: pointer;
                
            }
        }
    }

        .originalPrice{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 8.6rem;
            height: 5.4rem;
            
            span:first-child {
                width: 7.3rem;
                height: 2.8rem;
                text-align: center;
                font-family: ${({theme}) => theme.font.family};
                font-size: 1.4rem;
                line-height: 2.8rem;
                letter-spacing: 0.025rem;
                font-weight: ${({theme}) => theme.font.weight.normal};
                text-decoration: line-through;
                color: ${({theme}) => theme.colors.lightGray2}; 
            }
            span:last-child {
                width: 8.6rem;
                height: 2.4rem;
                text-align: center;
                font-family: ${({theme}) => theme.font.family};
                font-size: 1.6rem;
                line-height: 2.4rem;
                letter-spacing: 0.025rem;
                font-weight: ${({theme}) => theme.font.weight.bold};
                color: ${({theme}) => theme.colors.darkGray2};        
            }
        }
        .totalPrice{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 8.6rem;
            height: 5.4re;
    
            span:first-child {
                width: 7.3rem;
                height: 2.8rem;
                text-align: center;
                font-family: ${({theme}) => theme.font.family};
                font-size: 1.4rem;
                line-height: 2.8rem;
                letter-spacing: 0.025rem;
                font-weight: ${({theme}) => theme.font.weight.normal};
                text-decoration: line-through;
                color: ${({theme}) => theme.colors.lightGray2}; 
            }
            span:last-child {
                width: 8.6rem;
                height: 2.4rem;
                text-align: center;
                font-family: ${({theme}) => theme.font.family};
                font-size: 1.6rem;
                line-height: 2.4rem;
                letter-spacing: 0.025rem;
                font-weight: ${({theme}) => theme.font.weight.bold};
                color: ${({theme}) => theme.colors.darkGray2};        
            }
        }

`;

export const AddressContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 83rem;
    height: 8.9rem;
    padding-top: 2rem;
    border-top: 0.1rem solid ${({theme}) => theme.colors.lightGray2};

    .discount {
        display: flex;
        flex-direction: column;
        width: 39.4rem;
        height: 8.9rem;

        span {
            width: 13.1rem;
            height: 2.4rem;
            font-family: ${({theme}) => theme.font.family};
            font-size: 1.2rem;
            line-height: 2.4rem;
            letter-spacing: 0.025rem;
            font-weight: ${({theme}) => theme.font.weight.bold};
            color: ${({theme}) => theme.colors.darkGray2}; 
        }

        .cupom {
            display: flex;
            gap: 2rem;

            input {
                width: 27rem;
                height: 6rem;
                background-color: ${({theme}) => theme.colors.lightGray3};
                border: none;
                border-radius: 0.8rem;
                padding: 2rem;
            }

            button {
                width: 11.4rem;
                height: 6rem;
                background-color: ${({theme}) => theme.colors.lightGray3};
                color: ${({theme}) => theme.colors.primary};
                border: none;
                border-radius: 0.8rem;
            }
        }
    }
`;