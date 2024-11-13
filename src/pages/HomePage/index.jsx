import { Loading } from "@/components/Loading";
import { Carousel } from "./Carousel";
import { FeaturedSection } from "./Featured";
import { SpecialOffer } from "./SpecialOffer";

export function HomePage() {
  return (
    <>
      <Loading />
      <Carousel />
      <FeaturedSection />
      <SpecialOffer />
    </>
  );
}
