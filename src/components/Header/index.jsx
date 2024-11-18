import { HeaderStyle, HeaderWrapper, GridHeader, SearchContainer, SearchInput, SearchButton, Navbar, NavList, StyledLink, BtnHome, MiniCartIcon  } from "./style";
import { LuSearch } from "react-icons/lu"; 
import { DripStore } from "../icons";
import miniCart from '../../assets/mini-cart.svg';
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderStyle>
      <HeaderWrapper>
                <DripStore />
                <GridHeader>
                    <SearchContainer>
                        <SearchInput 
                            type="text"
                            placeholder='Pesquisar Produto...'
                        />
                        <SearchButton>
                            <LuSearch size={20} />
                        </SearchButton>
                    </SearchContainer>
                </GridHeader>
                <GridHeader>
                    <StyledLink href="/cadastro">Cadastre-se</StyledLink>
                    <BtnHome to='/login'>Entrar</BtnHome>
                        <MiniCartIcon src={miniCart} alt="Mini Cart" />
                </GridHeader>
            </HeaderWrapper>
            <Navbar>
                <NavList>
                    <NavLink 
                    to="/" 
                    
                    >
                        Home
                    </NavLink>
                    <NavLink 
                    to="/produtos" 
                    
                    >
                        Produtos
                    </NavLink>
                    <NavLink 
                    to="/categorias" 
                    
                    >
                        Categorias
                    </NavLink>
                    <NavLink 
                    to="/pedidos" 
                    
                    >
                        Meus Pedidos
                    </NavLink>
                </NavList>
            </Navbar>
    </HeaderStyle>
  );
}
