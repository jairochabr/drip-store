import { Loading } from "@/components/Loading";
import { Carousel } from "./Carousel";
import { TrendingProducts } from "./TrendingProducts";
import { SpecialOffer } from "./SpecialOffer";

export function HomePage() {
  return (
    <>
      <Loading />
      <Carousel />
      <TrendingProducts />
      <SpecialOffer />
    </>
  );
}
