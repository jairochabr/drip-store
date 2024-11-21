import React, { useState } from "react";
import { MenuSection, Profile, Orders, Informations, Payment } from "./style";

export function OrdersMenu({ onSelect }) {
  const [activeItem, setActiveItem] = useState("profile");

  const handleClick = (item) => {
    setActiveItem(item);
    onSelect(item);
  };

  return (
    <MenuSection>
      <Profile className={activeItem === "profile" ? "active" : ""}>
        <a onClick={() => handleClick("profile")}>Meu Perfil</a>
      </Profile>
      <Orders className={activeItem === "orders" ? "active" : ""}>
        <a onClick={() => handleClick("orders")}>Meus Pedidos</a>
      </Orders>
      <Informations className={activeItem === "informations" ? "active" : ""}>
        <a onClick={() => handleClick("informations")}>Minhas Informações</a>
      </Informations>
      <Payment className={activeItem === "payment" ? "active" : ""}>
        <a onClick={() => handleClick("payment")}>Métodos de Pagamento</a>
      </Payment>
    </MenuSection>
  );
}
