import { Link } from "react-router-dom";
import Gmail from "../../assets/Login-fotos/gmail.png";
import Facebook from "../../assets/Login-fotos/facebook.svg";
import Sapato1 from "../../assets/Login-fotos/sapato1.svg";
import Sapato2 from "../../assets/Login-fotos/sapato2.svg";
import { LoginContainer } from "./style"

export function Login() {
    return (
        <LoginContainer>
            <div className="sign-in-container">

                <div className="BoxLogin">

                    <h3 className="AcesseSuaConta">Acesse sua conta</h3>

                    <p className="NovoCliente">Novo cliente? Então registre-se <Link className="CliqueAqui" to='/cadastro'>aqui</Link>. </p>

                    <form className="FormLogin">

                        <label className="LoginLabel">Login *</label>
                        <input className="InputLoginSenha" type="text" placeholder="Insira seu login ou email" />

                        <label className="LoginLabel">Senha *</label>
                        <input className="InputLoginSenha" type="password" placeholder="Insira sua senha" />


                        <Link className="LinkAqui">Esqueci minha senha</Link>
                        <button className="Button-Acesse">Acessar Conta</button>
                    </form>

                    <div className="div-Login4">

                        <div className="realizar-login-p"> 
                            <p className="Cor"> Ou faça login com </p>
                            <img src={Gmail} alt="Gmail" />
                            <img src={Facebook} alt="logo do facebook" />
                        </div>

                    </div>

                </div>

                {/* <div > */}
                    <img className="SapatoLogin1" src={Sapato1} />
                    <img className="SapatoLogin2" src={Sapato2} />


                {/* </div> */}

            </div>

        </LoginContainer>
    );
};