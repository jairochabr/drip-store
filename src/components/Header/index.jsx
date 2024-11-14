import { HeaderStyle, HeaderWrapper, GridHeader, SearchContainer, SearchInput, SearchButton, Navbar, NavList, NavItem, StyledLink, BtnHome, MiniCartIcon  } from "./style";
import { LuSearch } from "react-icons/lu"; 
import logo from '../../assets/logo-header.svg';
import miniCart from '../../assets/mini-cart.svg';

export function Header() {
  return (
    <HeaderStyle>
      <HeaderWrapper>
                <GridHeader>
                    <img src={logo} alt="Logo Digital Store" />
                </GridHeader>
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
                    <StyledLink href="">Cadastre-se</StyledLink>
                    <BtnHome>Entrar</BtnHome>
                    <a href="/carrinho" aria-label="Carrinho">
                        <MiniCartIcon src={miniCart} alt="Mini Cart" />
                    </a>
                </GridHeader>
            </HeaderWrapper>
            <Navbar>
                <NavList>
                    <NavItem>Home</NavItem>
                    <NavItem>Produtos</NavItem>
                    <NavItem>Categorias</NavItem>
                    <NavItem>Meus Pedidos</NavItem>
                </NavList>
            </Navbar>
    </HeaderStyle>
  );
}
