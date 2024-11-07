import { Carousel } from "./Carousel";
import { OfferSection } from "./Offer";
import { Loading } from "@/components/Loading";

export function HomePage() {
  return (
    <>
      <Loading />
      <Carousel />
      
      <OfferSection />
    </>
  );
}
