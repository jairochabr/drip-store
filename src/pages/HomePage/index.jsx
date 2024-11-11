import { Loading } from "@/components/Loading";
import { Carousel } from "./Carousel";
import { FeaturedSection } from "./Featured";
import { OfferSection } from "./Offer";

export function HomePage() {
  return (
    <>
      <Loading />
      <Carousel />
      <FeaturedSection />
      <OfferSection />
    </>
  );
}
