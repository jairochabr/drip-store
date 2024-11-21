import React from "react";
import {
  InformationSection,
  InformationHeader,
  PersolnalInformations,
  DeliveryInformations,
} from "./style";

export function UserInformations() {
  const users = [
    {
      id: 1,
      name: "Ingrid Stephanye da Silva",
      cpf: "01234567890",
      email: "ingrid@gmail.com",
      phone: "(85) 9 8765 - 4321",
      address: "Rua Exemplo, 123",
      neighborhood: "Bairro Exemplo",
      city: "Fortaleza",
      cep: "60841480",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <InformationSection key={user.id}>
          <InformationHeader>
            <span>Minhas Informações</span>
            <a href="">Editar</a>
          </InformationHeader>
          <PersolnalInformations>
            <span>Informações Pessoais</span>
            <div className="name">
              <span>Nome: </span>
              <span>{user.name}</span>
            </div>
            <div className="CPF">
              <span>CPF: </span>
              <span>{user.cpf}</span>
            </div>
            <div className="email">
              <span>E-mail: </span>
              <span>{user.email}</span>
            </div>
            <div className="phone">
              <span>Celular: </span>
              <span>{user.phone}</span>
            </div>
          </PersolnalInformations>
          <DeliveryInformations>
            <span>Informações de Entrega</span>
            <div className="address">
              <span>Endereço: </span>
              <span>{user.address}</span>
            </div>
            <div className="neighborhood">
              <span>Bairro: </span>
              <span>{user.neighborhood}</span>
            </div>
            <div className="city">
              <span>Cidade: </span>
              <span>{user.city}</span>
            </div>
            <div className="CEP">
              <span>CEP: </span>
              <span>{user.cep}</span>
            </div>
          </DeliveryInformations>
        </InformationSection>
      ))}
    </div>
  );
}
