import { Link } from "react-router-dom";
import Gmail from "../../assets/Login-fotos/gmail.png";
import Facebook from "../../assets/Login-fotos/facebook.svg";

export const Login = () => {
    return (
        <div>
            <h1>Acesse sua conta</h1>
            <p>Novo cliente? Então registre-se <Link>aqui</Link>. </p>
            <label>Login</label>
            <input type="text" placeholder="Insira seu login ou email"/>
            <label>Senha</label>
            <input type="text" placeholder="Insira sua senha"/>
            <Link>Esqueci minha senha</Link>
            <p>Acessar Conta</p>
            <div>
                <p>Ou faça login com </p>
                <img src={Facebook}/> 
                <img src={Gmail}/>
            </div>
         </div>
)
};