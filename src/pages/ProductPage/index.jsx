import { useState } from "react";
import Filter from "./Filter";
import { ProductList } from "./ProductList";
import { ProductDetails } from "./ProductDetails";
import { PageContainer, ProductContent, FilterContainer } from "./Style";

export function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Função para definir o produto selecionado
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <PageContainer>
        <FilterContainer>
          <Filter />
        </FilterContainer>
        <ProductContent>
          {/* Lista de produtos com função para selecionar */}
          <ProductList onSelectProduct={handleSelectProduct} />

          {/* Exibe os detalhes apenas se um produto for selecionado */}
          {selectedProduct && <ProductDetails product={selectedProduct} />}
        </ProductContent>
      </PageContainer>
    </>
  );
}
