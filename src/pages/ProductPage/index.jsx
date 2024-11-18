import { useState } from "react";
import { Loading } from "@/components/Loading";
import Filter from "./Filter";
import { ProductList } from "./ProductList";
import { ProductDetails } from "./ProductDetails"; // Importação correta
import { PageContainer, ProductContent, FilterContainer } from "./style";

export function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <Loading />
      <PageContainer>
        <FilterContainer>
          <Filter />
        </FilterContainer>
        <ProductContent>
          <ProductList onSelectProduct={handleSelectProduct} />
          {selectedProduct && <ProductDetails product={selectedProduct} />}
        </ProductContent>
      </PageContainer>
    </>
  );
}
