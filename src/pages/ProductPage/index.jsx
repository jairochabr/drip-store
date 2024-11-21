import Filter from "./Filter";
import { ProductList } from "./ProductList";
import { PageContainer, ProductContent, FilterContainer } from "./style";

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
