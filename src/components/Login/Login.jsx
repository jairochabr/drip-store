import { Link } from "react-router-dom";
import Gmail from "../../assets/Login-fotos/gmail.png";
import Facebook from "../../assets/Login-fotos/facebook.svg";
import { LoginContainer } from "./style"
import { BtnPrimary } from "../Buotoes/BtnPrimary/BtnPrimary";

export function Login() {
    return (
        <LoginContainer>
            <h3 className='AcesseSuaConta'>Acesse sua conta</h3>

            <form className="FormLogin">
                <p className="NovoCliente">Novo cliente? Então registre-se <Link className="CliqueAqui" to='registro'>aqui</Link>. </p>
                <div>
                    <label className="LoginLabel">Login</label>
                    <input type="text" placeholder="Insira seu login ou email" />
                </div>
                <div>
                    <label className="Senha">Senha</label>
                    <input type="password" placeholder="Insira sua senha" />
                </div>
                <Link>Esqueci minha senha</Link>
                <BtnPrimary>Acessar Conta</BtnPrimary>
            </form>
            <div>
                <div>
                    <div>
                        <p>Ou faça login com</p>
                        <img src={Gmail} alt="Gmail" />
                        <img scr={Facebook} alt="Facebook" />

                    </div>




                </div>


            </div>
        </LoginContainer>
    );
}