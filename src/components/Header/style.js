import styled from "styled-components";
import { colors } from "../../styles/theme";

export const HeaderStyle = styled.header`
   width: 100%;
`;

export const HeaderWrapper = styled.div`
    background-color: ${colors.white};
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
    background-color: ${colors.lightGray2};
    color: ${colors.lightGray3};
`;

export const SearchButton = styled.button`
    height: 40px; 
    border-radius: 0 4px 4px 0; 
    border: none;
    background-color: ${colors.lightGray3}; 
    color: ${colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 0 10px; 
    cursor: pointer; 

    &:hover {
        background-color: ${colors.secundary}; 
    }
`;

export const Navbar = styled.nav`
    background-color: var(--white);
    display: flex;
    justify-content: start;
    height: 55px;
    padding: 15px 50px;
`;

export const NavList = styled.ul`
    display: flex;
    gap: 20px;
    color: var(--dark-gray);
    list-style: none;
`;

export const NavItem = styled.li`
    font-weight: 400;
    cursor: pointer;

    &:hover {
        color: var(--primary);
        font-weight: 700;
        border-bottom: 3px solid var(--primary);
    }
`;

export const StyledLink = styled.a`
    padding: 10px 16px;
    color: var(--dark-gray);
    font-weight: 500;
    text-decoration: underline;
`;

export const BtnHome = styled.button`
    padding: 8px 30px;
    margin: 0 20px;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 4px;
    border: none;
`;

export const MiniCartIcon = styled.img`
    height: 20px; 
    width: auto; 
`;