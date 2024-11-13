import { Link } from "react-router-dom";
import Gmail from "../../assets/Login/gmail.png";
import Facebook from "../../assets/Login/facebook.svg";
import './Login.css';
import './styles.css'

export const Login = () => {
    return (
        <div className="login-container">
            <h3 className='AcesseSuaConta'>Acesse sua conta</h3>
            <form>
                <p className="NovoCliente">Novo cliente? Então registre-se  </p>
                <label className="Login">Login</label>
                <input type="text" placeholder="Insira seu login ou email" />
                <label className="Senha">Senha</label>
                <input type="password" placeholder="Insira sua senha" />
                
                <p>Acessar Conta</p>
            </form>
            <div>
                <p>Ou faça login com </p>
                <img src={Facebook} />
                <img src={Gmail} />
            </div>
        </div>
    )
};
