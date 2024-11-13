import BlockForm from '@/components/BlockForm'
import * as S from './style'
import Input from '@/components/@ui/Input'

export default function CreateAccountForm() {
    return (
        <>
           <S.Container>
                <S.Titulo>Criar Conta</S.Titulo>
                <BlockForm value="Informações pessoais">
                    <Input
                        htmlFor="nome"
                        id="nome"
                        labelValue="Nome Completo *"
                        placeholder="Insira seu nome"
                    />
                </BlockForm>
                <S.Newslatter>
                    <input type="checkbox" />
                    <p>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</p>
                </S.Newslatter>
            </S.Container> 
        </>
    )
}