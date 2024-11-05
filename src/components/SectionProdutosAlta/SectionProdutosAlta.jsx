import "./SectionProdutosAlta.css";
import { ProdutoCard } from "../ProdutoCard/ProdutoCard";

export const SectionProdutosAlta = () => {
  return (
    <section className="produtos-em-alta">
      <div className="produtos-em-alta-header">
        <h2>Produtos em alta</h2>
        <a href="#" className="ver-todos">
          Ver todos →
        </a>
      </div>
      <ProdutoCard />
    </section>
  );
};
