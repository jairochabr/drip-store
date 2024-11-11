import { TENNIS } from "@/assets";
import { ProductCard } from "@/components/@ui/ProductCard";
import { FeaturedStyle, TrendingProducts } from "./style";

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
];

export function FeaturedSection() {
  return (
    <FeaturedStyle>
      <div className="container">
        {/* Resto da seção aqui */}
        <TrendingProducts>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </TrendingProducts>
      </div>
    </FeaturedStyle>
  );
}
