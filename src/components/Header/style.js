import styled from "styled-components";
import { Button } from "../@ui/Button";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
   width: 100%;
`;

export const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1.5rem;
`;

export const GridHeader = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 59.9rem; 
    height: 6rem; 
    padding: 1rem;
    border-radius: 0.4rem 0 0 0.4rem; 
    border: none;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.lightGray3};
    color:  ${({ theme }) => theme.colors.lightGray2};
`;

export const SearchButton = styled.button`
    height: 4rem; 
    border-radius: 0 0.4rem 0.4rem 0; 
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGray3};
    color: ${({ theme }) => theme.colors.lightGray2};
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 0 1rem; 
    cursor: pointer;
    position: absolute;
    right: 0;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secundary};
    }
`;

export const Navbar = styled.nav`
    background-color:${({ theme }) => theme.colors.secundary};
    display: flex;
    justify-content: start;
    height: 5.5rem;
    padding-block: 1.5rem;
`;

export const NavList = styled.ul`
    display: flex;
    gap: 2rem;
    color:${({ theme }) => theme.colors.secundary};
    list-style: none;

    a{
        font-weight: 400;
        cursor: pointer;

        &.active {
        color:${({ theme }) => theme.colors.primary};
        font-weight: 700;
        border-bottom: 0.3rem solid ${({ theme }) => theme.colors.primary};
        }     
    }
`;

export const StyledLink = styled(Link)`
    padding: 1rem 1.6rem;
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 400;
    text-decoration: underline;
`;

export const BtnHome = styled(Button)`
    padding: 0.8rem 3rem;
    margin: 0 2rem;
`;

export const CartIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  min-width: 1.8rem;
  height: 1.8rem;
  padding: 0 4px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
