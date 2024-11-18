import styled from "styled-components";

export const HeaderStyle = styled.header`
   width: 100%;
`;

export const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px 15px 50px;
`;

export const GridHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInput = styled.input`
    width: 600px; 
    height: 40px; 
    padding: 10px;
    border-radius: 4px 0 0 4px; 
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGray3};
    color:  ${({ theme }) => theme.colors.lightGray2};
`;

export const SearchButton = styled.button`
    height: 40px; 
    border-radius: 0 4px 4px 0; 
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGray3};
    color: ${({ theme }) => theme.colors.lightGray2};
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 0 10px; 
    cursor: pointer; 

    &:hover {
        background-color: ${({ theme }) => theme.colors.secundary};
    }
`;

export const Navbar = styled.nav`
    background-color:${({ theme }) => theme.colors.secundary};
    display: flex;
    justify-content: start;
    height: 55px;
    padding: 15px 50px;
`;

export const NavList = styled.ul`
    display: flex;
    gap: 20px;
    color:${({ theme }) => theme.colors.secundary};
    list-style: none;

    a{
        font-weight: 400;
        cursor: pointer;

        &.active {
        color:${({ theme }) => theme.colors.primary};
        font-weight: 700;
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
        }     
    }
`;

export const StyledLink = styled.a`
    padding: 10px 16px;
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 500;
    text-decoration: underline;
`;

export const BtnHome = styled.button`
    padding: 8px 30px;
    margin: 0 20px;
    background-color:${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.white};
    border-radius: 4px;
    border: none;
    cursor: pointer;
`;

export const MiniCartIcon = styled.img`
    height: 20px; 
    width: auto; 
`;