import { Pants, Shirts, Sneakers, Headphone } from "@/components/icons";
import IconsColecao from "./icon";
import CardColecaoDestaque from "../../../components/CardColecao/index";

import { Camisa, Headphones, Tenis } from "@/assets";
import "./SectionColecaoDestaque.css";

export const SectionColecaoDestaque = () => {
  return (
    <section className="Colecao">
      <div className="colecao-header">
        <h2>Coleções em destaque</h2>
      </div>
      <div className="produto-colecao">
        <CardColecaoDestaque
          label="Novo drop Supreme"
          img={Camisa}
          discount="30% OFF"
        />

        <CardColecaoDestaque
          label="Coleção Adidas"
          img={Tenis}
          discount="30% OFF"
        />

        <CardColecaoDestaque
          label="Novo Beats Bass"
          img={Headphones}
          discount="30% OFF"
        />
      </div>

      {/* Ícones de Categoria */}

      <div className="colecaoIcons">
        <div className="colecao-icon-head">
          <h2>Coleções em destaque</h2>
        </div>

        <div className="Col-icon">
          <IconsColecao label="Camisa">
            <Shirts />
          </IconsColecao>

          <IconsColecao label="Calças">
            <Pants />
          </IconsColecao>

          <IconsColecao label="Bonés">
            <Pants />
          </IconsColecao>

          <IconsColecao label="Headphones">
            <Headphone />
          </IconsColecao>

          <IconsColecao label="Tênis">
            <Sneakers />
          </IconsColecao>
        </div>
      </div>
    </section>
  );
};
