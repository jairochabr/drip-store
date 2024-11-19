import { Link } from "react-router-dom";
import Gmail from "../../assets/Login-fotos/gmail.png";
import Facebook from "../../assets/Login-fotos/facebook.svg";
import { LoginContainer } from "./style"

export function Login() {
    return (
        <LoginContainer>
            <h3 className='AcesseSuaConta'>Acesse sua conta</h3>

            <p className="NovoCliente">Novo cliente? Então registre-se <Link className="CliqueAqui" to='registro'>aqui</Link>. </p>
           
            <form className="FormLogin">
                
                 <label className="LoginLabel">Login *</label>
                 <input className= "InputLoginSenha"type="text" placeholder="Insira seu login ou email" />
              
                    <label className="LoginLabel">Senha *</label>
                    <input className="InputLoginSenha" type="password" placeholder="Insira sua senha" />

                
                <Link className="LinkAqui">Esqueci minha senha</Link>
                <button className="Button-Acesse">Acessar Conta</button>
            </form>

            {/* <div className="div-Login4"> */}
            <p className="realizar-login-p">Ou faça login com</p>
                    {/* <div>
                        <p>Ou faça login com</p>
                        <img src={Gmail} alt="Gmail" />
                        <img src={Facebook} alt="logo do facebook"/>

                    </div> */}



            {/* </div> */}
        </LoginContainer>
    );
}