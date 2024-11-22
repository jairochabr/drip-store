import { ProductCard } from "@/components/@ui/ProductCard";
import { ProductGrid } from "../style";

const ProductList = ({ products }) => {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
};

export default ProductList;
