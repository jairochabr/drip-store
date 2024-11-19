import { Link } from "react-router-dom";
import {
    MenuSection, 
    Profile,
    Orders,
    Informations,
    Payment
} from './style';

export function OrdersMenu() {
    return(
        <MenuSection>
            <Profile>
                <Link to='/'>Meu Perfil</Link>
            </Profile>
            <Orders>
                <Link to='/'>Meus Pedidos</Link>
            </Orders>
            <Informations>
                <Link to='/'>Minhas Informações</Link>
            </Informations>
            <Payment>
                <Link to='/'>Métodos de Pagamento</Link>
            </Payment>
        </MenuSection>
    )
}