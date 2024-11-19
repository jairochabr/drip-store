import { HeaderStyle, HeaderWrapper, GridHeader, SearchContainer, SearchInput, SearchButton,Navbar,
NavList, StyledLink, BtnHome, MiniCartIcon } from "./style";
import { LuSearch } from "react-icons/lu";
import { DripStore } from "../icons";
import miniCart from "../../assets/mini-cart.svg";
import { NavLink } from "react-router-dom";
import { CartModal } from "../CartModal";
import { useState } from "react";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <HeaderStyle>
        <div className="container">
          <HeaderWrapper>
            <DripStore />
            <GridHeader>
              <SearchContainer>
                <SearchInput type="text" placeholder="Pesquisar Produto..." />
                <SearchButton>
                  <LuSearch size={24} />
                </SearchButton>
              </SearchContainer>
            </GridHeader>
            <GridHeader>
              <StyledLink href="/cadastro">Cadastre-se</StyledLink>
              <BtnHome to="/login">Entrar</BtnHome>
              <MiniCartIcon
                src={miniCart}
                alt="Mini Cart"
                onClick={toggleCart}
              />
            </GridHeader>
          </HeaderWrapper>
          <Navbar>
            <NavList>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/produtos">Produtos</NavLink>
              <NavLink to="/categorias">Categorias</NavLink>
              <NavLink to="/pedidos">Meus Pedidos</NavLink>
            </NavList>
          </Navbar>
        </div>
      </HeaderStyle>
      <CartModal isOpen={isCartOpen} />
    </>
  );
}
