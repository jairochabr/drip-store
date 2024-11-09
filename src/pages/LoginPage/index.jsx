import { Link } from "react-router-dom";
import GMail from "@/assets/gmail.svg";
import Facebook from "@/assets/facebook.svg";

export const LoginPage = () => {
  return (
    <div>
      <h1>Acesse sua conta</h1>
      <p>
        Novo cliente? Então registre-se <Link>aqui</Link>.{" "}
      </p>
      <label>Login</label>
      <input type="text" placeholder="Insira seu login ou email" />
      <label>Senha</label>
      <input type="text" placeholder="Insira sua senha" />
      <Link>Esqueci minha senha</Link>
      <p>Acessar Conta</p>
      <div>
        <p>Ou faça login com </p>
        <img src={Facebook} />
        <img src={GMail} />
      </div>
    </div>
  );
};

// 👇 Aqui é o link do localhost do login, quando fazer um "npm run dev"

// http://localhost:5174/login