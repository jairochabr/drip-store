import { Loading } from "@/components/Loading";
import { Carousel } from "./Carousel";
import { TrendingProducts } from "./TrendingProducts";
import { SpecialOffer } from "./SpecialOffer";
import { FeaturedCollection } from "./FeaturedCollection";

export function HomePage() {
  return (
    <>
      <Loading />
      <Carousel />
      <FeaturedCollection />
      <TrendingProducts />
      <SpecialOffer />
    </>
  );
}
