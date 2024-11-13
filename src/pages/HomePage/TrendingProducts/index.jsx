import { Link } from "react-router-dom";
import { ProductCard } from "@/components/@ui/ProductCard";
import { ArrowRight } from "@/components/icons";
import { TrendingSection, TrendingContent, TrendingWrapper } from "./style";
import { TRENDING_PRODUCTS } from '@/constants'

export function TrendingProducts() {
  return (
    <TrendingSection>
      <div className="container">
        <TrendingWrapper>
          <h2 className="title">Produtos em alta</h2>
          <Link to='/produtos'>
            <span>Ver todos</span>
            <ArrowRight />
          </Link>
        </TrendingWrapper>
        <TrendingContent>
          {TRENDING_PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </TrendingContent>
      </div>
    </TrendingSection>
  );
}
