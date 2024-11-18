import { TENNIS } from "@/assets";
import { ProductCard } from "@/components/@ui/ProductCard";
import { ProductListContainer } from "./style";

export function ProductList({ onSelectProduct }) {
  const products = [
    {
      id: 1,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 100,
      discount: 30,
      image: TENNIS.kSwiss,
    },
    {
      id: 2,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 100,
      discount: 30,
      image: TENNIS.kSwiss,
    },
    {
      id: 3,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 100,
      image: TENNIS.kSwiss,
    },
    {
      id: 4,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 100,
      image: TENNIS.kSwiss,
    },
    {
      id: 5,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 100,
      image: TENNIS.kSwiss,
    },
    {
      id: 6,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 100,
      image: TENNIS.kSwiss,
    },
    {
      id: 7,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 100,
      image: TENNIS.kSwiss,
    },
    {
      id: 8,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 100,
      image: TENNIS.kSwiss,
    },
    {
      id: 9,
      name: "K-Swiss V8 - Masculino",
      category: "Tênis",
      originalPrice: 200,
      currentPrice: 100,
      image: TENNIS.kSwiss,
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <ProductListContainer>
      {products.map((product) => (
        <div key={product.id} onClick={() => onSelectProduct(product)}>
          <ProductCard product={product} />
        </div>
      ))}
    </ProductListContainer>
  );
}
