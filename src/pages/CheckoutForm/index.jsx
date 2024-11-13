import BlockForm from '@/components/BlockForm';
import * as S from './style';
import Input from '@/components/@ui/Input';

export default function CheckoutForm() {
    return (
        <>
            <S.Body>
                <S.Container>
                    <S.Titulo>Finalizar Compra</S.Titulo>
                    <S.AllWrapper>
                        <S.Wrapper>
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
                            <BlockForm value="Informações de Pagamento">
                                <div className='formaDePagamento'>
                                    <p htmlFor="">Forma de Pagamento</p>
                                    <div className='radios'>
                                        <div className='radio'>
                                            <input name='radio' type="radio" id='radio1'/>
                                            <label htmlFor="radio1">Cartão de Crédito</label>
                                        </div>
                                        <div className='radio'>
                                            <input name='radio' type="radio" id='radio2'/>
                                            <label htmlFor="radio2">Boleto Bancário</label>
                                        </div>
                                    </div>
                                </div>
                                <Input
                                    htmlFor="nomeCartao"
                                    id="nomeCartao"
                                    labelValue="Nome do Cartão *"
                                    placeholder="Insira o nome impresso no cartão"
                                />
                                <div className='infoCard'>
                                    <Input
                                        htmlFor="numeroCartao"
                                        id="numeroCartao"
                                        labelValue="Número do Cartão *"
                                        placeholder="Insira o número do cartão"
                                    />
                                    <Input
                                        htmlFor="cvv"
                                        id="cvv"
                                        labelValue="CVV *"
                                        placeholder="CVV"
                                    />
                                </div>
                                <div className='infoCard2'>
                                    <Input
                                        htmlFor="cpf"
                                        id="cpf"
                                        labelValue="CPF *"
                                        placeholder="Insira o CPF do tirular do cartão"
                                    />
                                    <Input
                                        htmlFor="data"
                                        id="data"
                                        labelValue="Data de Validade *"
                                        placeholder="Data de Validade do Cartão"
                                    />
                                </div>
                            </BlockForm>
                            <BlockForm value="Finalizar Compra">

                            </BlockForm>
                        </S.Wrapper>
                        <span className='resumo'></span>
                    </S.AllWrapper>
                </S.Container>
            </S.Body>
        </>
    )
}