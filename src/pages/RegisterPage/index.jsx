import BlockForm from "@/components/BlockForm";
import * as S from "./style";
import Input from "@/components/@ui/Input";
import { Button } from "@/components/@ui/Button";

export function RegisterPage() {
  return (
    <>
      <S.Body>
        <S.Container>
          <S.Titulo>Criar Conta</S.Titulo>
          <div className="wrapper">
            <BlockForm value="Informações Pessoais">
              <Input
                htmlFor="nome"
                id="nome"
                labelValue="Nome Completo *"
                placeholder="Insira seu nome"
              />
              <Input
                htmlFor="cpf"
                id="cpf"
                labelValue="CPF *"
                placeholder="Insira seu CPF"
              />
              <Input
                htmlFor="email"
                id="email"
                labelValue="Email *"
                placeholder="Insira seu email"
              />
              <Input
                htmlFor="celular"
                id="celular"
                labelValue="Celular *"
                placeholder="Insira seu celular"
              />
            </BlockForm>
            <BlockForm value="Informações de Entrega">
              <Input
                htmlFor="cep"
                id="cep"
                labelValue="CEP *"
                placeholder="Insira seu CEP"
              />
              <Input
                htmlFor="endereço"
                id="endereço"
                labelValue="Endereço *"
                placeholder="Insira seu endereço"
              />
              <Input
                htmlFor="bairro"
                id="bairro"
                labelValue="Bairro *"
                placeholder="Insira seu bairro"
              />
              <Input
                htmlFor="cidade"
                id="cidade"
                labelValue="Cidade *"
                placeholder="Insira sua cidade"
              />
              <Input
                htmlFor="complemento"
                id="complemento"
                labelValue="Complemento"
                placeholder="Insira o complemento"
              />
            </BlockForm>
          </div>
          <S.Newslatter>
            <input type="checkbox" />
            <p>
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </p>
          </S.Newslatter>
          <Button>Criar Conta</Button>
        </S.Container>
      </S.Body>
    </>
  );
}
