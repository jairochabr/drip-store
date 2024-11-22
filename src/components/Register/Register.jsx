import { Link } from "react-router-dom"
import { RegisterAccount } from "./style"
import GmailGoogle from "../../assets/Register-fotos/gmail.svg"
import Facebook from "../../assets/Register-fotos/facebook.svg"
import SapatoRegister1 from "../../assets/Register-fotos/sapato1.svg"
import SapatoRegister2 from "../../assets/Register-fotos/sapato2.svg"

export function Register() {
    return (
        <RegisterAccount>
            <div className="Register-Container">

                <div className="Register">

                    <h3 className="h3register">Crie sua conta</h3>
                    <p className="possuiConta">Já possui uma conta? Entre <Link className="CliqueAqui" to='/cadastro'>aqui</Link> </p>

                    <form className="FormRegister">
                        <label className="RegisterEmail">Email *</label>
                        <input className="InputEmail" type="password" placeholder="Insira seu email" />
                        <button className="Button-Criar">Criar Conta</button>

                    </form>
                    <div className="divCriarConta">
                        <p className="facaRegister">Ou faça login com  </p>
                        <img src={GmailGoogle} alt="gmail" />
                        <img scr={Facebook} alt="" />


                    </div>

                    


                </div>

                   <img className="SapatoRegister1" src={SapatoRegister1} />
                   <img className="SapatoRegister2" src={SapatoRegister2} />

            </div>

        </RegisterAccount>
    );
};