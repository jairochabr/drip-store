import { Pants, Shirts, Sneakers, Headphone } from "@/components/icons";
import IconsColecao from "./IconsCollection";
import CardColecaoDestaque from "@/components/CardColecao";

import { Camisa, Headphones, Tenis } from "@/assets";
import {
  ColIcon,
  Collection,
  CollectionContainer,
  CollectionIconHead,
  HeaderCollection,
  ProductCollection,
} from "./Style";

export const FeaturedCollection = () => {
  return (
    <Collection>
      <CollectionContainer>
        <HeaderCollection>
          <h2>Coleções em destaque</h2>
        </HeaderCollection>
        <ProductCollection>
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
        </ProductCollection>
        {/* Ícones de Categoria */}
        <div className="colecaoIcons">
          <CollectionIconHead>
            <h2>Coleções em destaque</h2>
          </CollectionIconHead>

          <ColIcon>
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
          </ColIcon>
        </div>
      </CollectionContainer>
    </Collection>
  );
};
