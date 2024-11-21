import { CartItems } from "@/components/Cart";
import { ResumeCart } from "@/components/Resume/ResumeCart";
import {
    CartSection
} from './style';

export function CartPage() {
    return(
        <CartSection>
            <CartItems />
            <ResumeCart 
            subtotal="R$ 219,00"
            frete="R$ 0,00"
            desconto="R$ 30,00"
            total="R$ 219,00"
            parcelas="ou 10x de R$ 21,00 sem juros"
            />
        </CartSection>
    )
}