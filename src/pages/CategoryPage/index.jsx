import { Resume } from "@/components/Resume";
import { ResumeCart } from "@/components/Resume/ResumeCart";


export function CategoryPage() {
  return (
    <>
    <ResumeCart 
      title = 'RESUMO'
      subtotal= 'R$ 219,00'
      frete= 'R$ 0,00'
      desconto= 'R$ 30,00'
      total= 'R$ 219,00'
      parcelas= 'ou 10x de R$ 21,00 sem juros'
      buttonLabel= 'Continuar'
    />

    <Resume 
      title = 'RESUMO'
      productImage
      productName = 'RESUMO'
      subtotal= 'R$ 219,00'
      frete= 'R$ 0,00'
      desconto= 'R$ 30,00'
      total= 'R$ 219,00'
      parcelas= 'ou 10x de R$ 21,00 sem juros'
      buttonLabel= 'Continuar'
    />

    </>
  )
}