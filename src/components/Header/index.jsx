import { HeaderStyle, HeaderWrapper, GridHeader, SearchContainer, SearchInput, SearchButton,
Navbar, NavList, StyledLink, BtnHome, CartIconWrapper, CartCount } from "./style";
import { LuSearch } from "react-icons/lu";
import { DripStore, MiniCart } from "../icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CartModal } from "../CartModal";
import { useCart } from "@/contexts/CartContext";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { products } = useCart();

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
              <StyledLink to="/cadastro">Cadastre-se</StyledLink>
              <BtnHome to="/login">Entrar</BtnHome>
              <CartIconWrapper>
                <MiniCart onClick={toggleCart} />
                {products.length > 0 && (
                  <CartCount>{products.length}</CartCount>
                )}
              </CartIconWrapper>
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
