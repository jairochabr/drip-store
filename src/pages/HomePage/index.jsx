import { Loading } from "@/components/Loading";
import { Carousel } from "./Carousel";
import { TrendingProducts } from "./TrendingProducts";
import { SpecialOffer } from "./SpecialOffer";
import { SectionColecaoDestaque } from "./FeaturedCollection/SectionColecaoDestaque";

export function HomePage() {
  return (
    <>
      <Loading />
      <Carousel />
      <SectionColecaoDestaque />
      <TrendingProducts />
      <SpecialOffer />
    </>
  );
}
