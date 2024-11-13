import { Link } from "react-router-dom";
import Gmail from "../../assets/login/gmail.svg";
import Facebook from "../../assets/login/facebook.svg";
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
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

export default Login;
