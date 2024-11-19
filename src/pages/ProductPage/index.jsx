
import { Loading } from "@/components/Loading";
import Filter from "./Filter";
import { ProductList } from "./ProductList"; // Importando o ProductList
import { PageContainer, ProductContent, FilterContainer } from "./style"; // Ajuste os caminhos conforme necessário

export function ProductPage() {
  return (
    <>
      <Loading />
      <PageContainer>
        <FilterContainer>
          <Filter />
        </FilterContainer>
        <ProductContent>
          <ProductList />
        </ProductContent>
      </PageContainer>
    </>
  );
}
