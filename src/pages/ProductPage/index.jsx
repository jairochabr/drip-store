import Filter from "./Filter";
import { ProductList } from "./ProductList"; // Importando o ProductList
import { PageContainer, ProductContent, FilterContainer } from "./Style"; // Ajuste os caminhos conforme necessário

export function ProductPage() {
  return (
    <>
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
